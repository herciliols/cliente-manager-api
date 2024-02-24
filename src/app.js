const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const customersRoutes = require('./routes/customersRoutes');

const app = express();
const yaml = require('yamljs');
const openApiSpec = yaml.load('swagger.yaml');

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.use('/auth', authRoutes);

app.use('/customers', customersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
