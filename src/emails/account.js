const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
  to: 'feduardo191@gmail.com',
  from: 'feduardo191@gmail.com',
  subject: 'This is my first criation',
  text: 'I hope this one actually gets to you.'
})