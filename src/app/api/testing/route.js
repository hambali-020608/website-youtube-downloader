import { NextResponse } from "next/server";
import Download from "../../../function/download";

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    try{
        const spotifyResponse= await Download('https://shinoa.us.kg/api/download/spotifydl',url)
        //https://statically.io/


        if(!spotifyResponse.ok){
            throw new Error(`HTTP error! Status: ${spotifyResponse.status}`)
        }

        const data = await spotifyResponse.json()

      return  NextResponse.json(data)

    }catch (error) {
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }

    


}