const functions = require("firebase-functions");
const SibApiV3Sdk = require("sib-api-v3-sdk");
const admin = require("firebase-admin");
// const cors = require("cors")({ origin: true });

admin.initializeApp();

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.SENDINBLUE_API_KEY;

const sendEmail = functions.https.onCall((data, context) => {
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      subject: `Enquiry from Portfolio Website - #${data.subject}`,
      sender: {
        email: data.email,
        name: data.name,
      },
      // replyTo: { email: "api@sendinblue.com", name: "Sendinblue" },
      to: [{ name: "John Doe", email: "tanvirkhaan004@gmail.com" }],
      htmlContent: `
        <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">       
            </head>
            <body>               
                <h1>Enquiry from Portfolio Website</h1>
                <p>Here are the details of your submission:</p>
                <ul>
                    <li>Name: ${data.name}</li>
                    <li>Name: ${data.subject}</li>
                    <li>Email: ${data.email}</li>
                    <li>Message: ${data.message}</li>

                </ul>
                <p>Thank you for considering our services.</p>
            </body>
        </html>

      `,
    })
    .then(
      data => {
        console.log("API called successfully. Returned data: " + data);
      },
      error => {
        console.error(error);
      }
    );

  // error handler

  // enable cors
  //   cors((req, res) => {
  //     req.set("Access-Control-Allow-Origin", "*");
  //     req.set("Access-Control-Allow-Methods", "POST");
  //     req.set("Access-Control-Allow-Headers", "Content-Type");
  //     req.set("Access-Control-Max-Age", "3600");

  //     res.status(200).send("Email sent successfully!");
  //   });

  return {
    message: "Email sent successfully!",
  };
});

exports.addMessage = sendEmail;
