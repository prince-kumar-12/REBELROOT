 import {connectDB} from "@/lib/mongoose"
import { NextResponse } from "next/server";
import contactDetails from "@/models/users/contactDetails"
export async function GET(){
   try{
       await connectDB();
       const users = await contactDetails.find();
       console.log("api started")
       return NextResponse.json(users)
    }catch(err){
        return NextResponse.json(
            {
                message:"problem in api"
            }
        )
    }
}

 