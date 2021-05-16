const path = require('path');
const fs = require('fs');
const app = require('express')();
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'BeautyNation',
            version: '1.0.0',
        },
        basePath: '/sdfgsdfg',
    },
    apis: [
        path.resolve(__dirname, 'models/*.js'),
        path.resolve(__dirname, 'routes/*.js')
    ]
};
const specs = swaggerJsdoc(options);
console.log(specs);
app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// подключаем роуты
const routes = require('express').Router();
fs.readdirSync(path.resolve(__dirname, 'routes')).forEach(file => {
    const name = path.resolve(__dirname, 'routes', file);
    require(name)(routes);
});
app.use('/api/v1', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Путь не найден 404');
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});

app.listen(5000, () => console.log('Swagger That API listening on port http://localhost:5000/api/v1/swagger/'));
