const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = []; // Simulação de banco de dados
const resetTokens = {}; // Armazenamento temporário de tokens

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

// Rota para solicitar redefinição de senha
app.post('/solicitar-redefinicao', (req, res) => {
    const { email } = req.body;
    const user = users.find(u => u.email === email);

    if (user) {
        const token = Math.random().toString(36).substr(2);
        const expirationTime = Date.now() + 120000; // 2 minutos a partir de agora
        resetTokens[email] = { token, expirationTime };

        const mailOptions = {
            from: 'seuemail@gmail.com',
            to: email,
            subject: 'Redefinição de Senha',
            text: `Clique no link para redefinir sua senha: http://seusite.com/redefinir-senha?token=${token}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Email de redefinição enviado.');
        });
    } else {
        res.status(404).send('Email não encontrado.');
    }
});

// Rota para redefinir a senha
app.post('/redefinir-senha', async (req, res) => {
    const { token, novaSenha } = req.body;
    const email = Object.keys(resetTokens).find(key => resetTokens[key].token === token);

    if (email) {
        const tokenInfo = resetTokens[email];
        if (Date.now() > tokenInfo.expirationTime) {
            delete resetTokens[email];
            return res.status(400).send('Token expirado.');
        }

        const user = users.find(u => u.email === email);
        user.senha = await bcrypt.hash(novaSenha, 10); // Criptografa a nova senha
        delete resetTokens[email];
        res.status(200).send('Senha redefinida com sucesso.');
    } else {
        res.status(400).send('Token inválido.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});