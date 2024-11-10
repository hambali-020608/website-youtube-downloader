import { NextResponse } from "next/server";
import Download from "../../../function/download";
import ytdl from "@distube/ytdl-core";

// TypeScript: import ytdl from '@distube/ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from '@distube/ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('@distube/ytdl-core'); with neither of the above

// Get video info

// Get video info with download formats
  

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
  
    try {
        const youtubeResponse = await fetch('https://shinoa.us.kg/api/download/ytdl', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'api_key': 'free',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: url })
        });
        if (!youtubeResponse.ok) {
            throw new Error(`HTTP error! Status: ${youtubeResponse.status}`);
        }

          return NextResponse.json(info.formats)
          
        // const youtubeResponse = await Download('https://shinoa.us.kg/api/download/ytdl',url)
        // if (!youtubeResponse.ok) {
        //     throw new Error(`HTTP error! Status: ${youtubeResponse.status}`);
        // }

        // const data = await youtubeResponse.json();
        // return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
  }