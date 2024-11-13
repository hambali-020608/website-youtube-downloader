import { NextResponse } from "next/server";
import download from "../../../function/download";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
  
    try {
            const video = await download(url,'mp3')
          return  NextResponse.json(video)
          
        
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
  }