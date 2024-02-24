const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const { authenticateUser } = require('./middlewares/authMiddleware');

const app = express();
const yaml = require('yamljs');
const openApiSpec = yaml.load('swagger.yaml');

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.use('/auth', authRoutes);

app.get('/dashboard', authenticateUser, (req, res) => {
    res.json({ message: 'Bem-vindo à sua dashboard (rota restrita a usuários autenticados)!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
