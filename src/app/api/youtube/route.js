import { NextResponse } from "next/server";
import download from "../../../function/download";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    const format = searchParams.get('format')
    const baseUrl = 'https://cuka.rfivecode.com'
    try {
            const video = await download(url,format)
          return  NextResponse.json(video)
          
        
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
}
