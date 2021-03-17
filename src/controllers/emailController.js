const sgMail= require('@sendgrid/mail')

module.exports = {
    async sendEmail(req, res) {
    
        const {to, subject, text, html} = req.body;
        const API_KEY = req.headers.authorization;

        sgMail.setApiKey(API_KEY)

        const message = {
            from: 'daniellost02@gmail.com',
            to,
            subject,
            text,
            html
        }
        
        sgMail.send(message)
            .then(response => console.log('email sents ....'))
            .catch(error => console.log(error.message))

        return res.json({ id: "funcionou" });
    },
    
    hello(req, res) {
        return res.json({ id: "funcionou" });
    }
}




 