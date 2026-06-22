
import { prisma } from "../../../../lib/prisma";
export async function GET() {
    return Response.json({
        message:"inside an api",
        name:"john"
    })

}
export async function POST() {
     return Response.json({
        message:"inside an api",
        name:"john"
    })
}
export async function  UPDATE(request,{searchParams}) {

    
}