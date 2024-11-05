import { NextResponse } from "next/server";
import Download from "../../../function/download";


export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
  
    try {
        const youtubeResponse = await Download('https://shinoa.us.kg/api/download/ytdl',url)
        if (!youtubeResponse.ok) {
            throw new Error(`HTTP error! Status: ${youtubeResponse.status}`);
        }

        const data = await youtubeResponse.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
  }