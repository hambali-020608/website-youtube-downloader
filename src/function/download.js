export default async function Download(api,url) {
    const youtubeResponse = await fetch(api, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: url })
    });

    return youtubeResponse


    

    
}

