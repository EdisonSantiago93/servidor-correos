'use strict';
const express = require('express');
const router = express.Router();
const mailer = require('../templates/registro-template')


router.post('/enviar-reporte', (req, res, next) => {
    var email = req.body.email
    var message = req.body.message
    console.log('email',email);
    console.log('message',message);

    var ms= mailer.enviar_mail(email,message);
    res.json({
        resultado: false,
        msj: ms,
    });
});




module.exports = router;