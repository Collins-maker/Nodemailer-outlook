const {createTransport}= require("nodemailer");

const email_config =require('../config/emailConfig');

const message_options ={
    to:"jonathan.mwaniki@thejitu.com" ,
    from: process.env.USER_EMAIL ,
    subject: "Week 8 Attachment Report",
    html: '<p>Hello Jonathan,</p><p>Please find attached my weekly report.</p>',
    attachments: [
        {
          filename: 'WEEK_EIGHT_WEEKLY_REPORT.docx',
          path: '/WEEK_EIGHT_WEEKLY_REPORT'
        }
    ]
};


const transporter = createTransport(email_config);

async function sendMail(){
    try {
        let results =await transporter.sendMail(message_options);
        console.log(results);
    } catch (error) {
      console.log(error); 
    }
}

module.exports = sendMail;