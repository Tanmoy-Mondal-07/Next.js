import nodemailer from 'nodemailer'
import User from '@/models/userModel'
import bcryptjs from 'bcryptjs'
import { Html } from 'next/document'

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType == "VERIFY") {
            await User.findByIdAndUpdate(userId,
                {
                    verifyToken: hashToken,
                    verifyTokenExpiry: Date.now() + 3600000
                }
            )
        } else if (emailType == "RESET") {
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken: hashToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                }
            )
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                //todo add from env
                user: "8f32175daf8082",
                pass: "118c54bddd1857"
            }
        });

        const mailOptions = {
            from: 'aa@gmail.com',
            to: email,
            subject: (emailType == "VERIFY") ? "verifu your email" : "reset password",
            Html: `<p>click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a> to ${(emailType == "VERIFY") ? "verifu your email" : "reset password"}</p>`
        }

        const mailresponse = await transport.sendMail(mailOptions)
        return mailresponse;
    } catch (error: any) {
        throw new Error(error.message)
    }
}