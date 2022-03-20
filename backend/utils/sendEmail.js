

import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
	let transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.SENDER_MAIL,
			pass: process.env.SENDER_PASSWORD,
		}
	});
	let mailOptions = {
		from: process.env.SENDER_MAIL,
		to: options.email,
		subject: options.subject,
		text: options.message
	};
	await transport.sendMail(mailOptions, (error, data) => {
		if (error) console.log(error);
		else console.log(`email sent` + data.response);
	})
};

export default sendEmail;