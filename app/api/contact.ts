import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

dotenv.config();


const transporter = nodemailer.createTransport({
    service: "gmail" , 
    auth: {
        user: process.env.EMAIL_USER , 
        pass: process.env.EMAIL_PASSWORD_APP
    }
})

export async function POST(req: NextRequest) {

    try {

        const {username , email , message } = await req.json();

        if(!username || !email || !message) {
            return NextResponse.json({error: "Please fill in all fields"}, {status: 400})
        }

        
        
    } catch (error) {
        
    }
}