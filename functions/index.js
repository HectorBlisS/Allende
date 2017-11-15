const functions = require('firebase-functions');
var nodemailer = require("nodemailer");
var Mailer = require("./mailer");

exports.sendTemplateMail = functions.https.onRequest((req, res)=>{
	var email = req.query.email;
	Mailer(email);
	res.send("enviado");
});

//on trigger events in database
exports.sendWelcomeAndPass = functions.database.ref("/distributors/{pushId}/email")
	.onWrite(event => {
		const email = event.data.val();
		const password = "cerveceriaAllende"
		//return event.data.ref.parent.child("uppercase").set(uppercase);
		var transporter = nodemailer.createTransport({
		//service:"Gmail",
		host: 'smtp.gmail.com',
        port: 587,
        //secure: true,
		auth: {
			user:"fixtergeek@gmail.com",
			pass:"Poweroso1704"
		}
		});
		var text = "Bienvenido a Cerveceria allende, tu password provisional es: " + password;

		var mailOptions = {
		from: "fixtergeek@gmail.com",
		to:email,
		subject: "Bienvenido a cerveceria Allende",
		text:text
		};

		transporter.sendMail(mailOptions, function(err, info){
		if(err){
			console.log(err);
			//res.json({yo:"error",error:err});
		}else{
			//res.json({yo:info.response});
		}
	});


	})
