import { NextResponse } from "next/server";
import Download from "../../../function/download";
import { YtdlCore } from '@ybd-project/ytdl-core/serverless';
// JavaScript: const { YtdlCore } = require('@ybd-project/ytdl-core');


export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    
    
const ytdl = new YtdlCore({
    // The options specified here will be the default values when functions such as getFullInfo are executed.
});

// Download a video


// Get video info



try {
        const data = await ytdl.getBasicInfo('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        
        // const youtubeResponse = await Download('https://shinoa.us.kg/api/download/ytdl',url)
        // if (!youtubeResponse.ok) {
        //     throw new Error(`HTTP error! Status: ${youtubeResponse.status}`);
        // }

        // const data = await youtubeResponse.json();
        return NextResponse.json(data.formats);
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
}
