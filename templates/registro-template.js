"use strict";

const nodemailer = require("nodemailer");
require("dotenv").config();

this.enviar_mail = (email, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "soportemonitoreoit@gmail.com",
      pass: "ihvvvjnllhnycdlx",
    },
  });

  let mail_options = {
    from: "Pabs",
    to: email,
    subject: "Reporte de daños en una bomba",
    html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Monitoreo IOT</h1>
                        <p  style="color: #fff; text-align:center">
                           <span style="color: #e84393">${message}</span> 
                           
                        </p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
                    </td>
                </tr>
            </table>
        `,
  };
  transporter.sendMail(mail_options, (error, info) => {
    {
      if (err) {
        console.log(error);
      } else {
        console.log(info);
      }
    }
  });
};

module.export = this;
