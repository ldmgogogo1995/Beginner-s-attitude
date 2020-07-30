//通过邮件发送验证码 nodemailer
//1配置邮件
//2发送邮件
"use strict";
const nodemailer = require("nodemailer");
let code = parseInt(Math.random() * (9999 - 1000 + 1) + 1000, 10);
let transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '18781932092@163.com', // generated ethereal user
        pass: 'UFLRAIZMYJKSYWTG', // generated ethereal password
    },
});

// send mail with defined transport object
transporter.sendMail({
        from: '"ldm 👻" <18781932092@163.com>', // sender address
        to: "775495877@qq.com", // list of receivers
        subject: "Hello nodemailer ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<h3>您的账号验证码是 ${code}</h3>`, // html body
    }, err => {
        if (!err) {
            console.log('发送邮件成功')
        }
    })
    // UFLRAIZMYJKSYWTG