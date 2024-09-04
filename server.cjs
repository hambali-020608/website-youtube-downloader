const ytdlp=require('yt-dlp-exec')
const express =require("express")
const fs=require("fs")
const cors=require('cors')
const path = require('path')
const port = 3000
const app = express()
const outputDir=path.join(__dirname,'download')

app.use(cors())


if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir)
}

async function downloadVideo(url, path) {
    try {
        await ytdlp(url, {
            format: 'mp4',
            output: path
        });
        console.log('Video downloaded successfully.');
    } catch (error) {
        console.error('Error downloading video:', error);
        throw error;  // Biarkan error dilempar ke Express untuk ditangani
    }
  }


app.get('/download',async(req,res)=>{
    const url = req.query.url
    const mp4name="video.mp4"
    const mp4Path=path.join(outputDir,mp4name)
    try{
        await downloadVideo(url,mp4Path)
        if(fs.existsSync(mp4Path)){
            console.log("siap mendownload file...", mp4Path)
            res.download(mp4Path,mp4name,(err)=>{
             if(err){
                console.error("gagal mengirim file",err)

             }else{
                console.log('berhasil mengirim file')
                fs.unlink(mp4Path,(err)=>{
                    if(err){
                        console.error("gagal menghapus file",err)
                    }
                })
             }
            })
        }
    }catch{

    }
    


})

app.listen(port,()=>{
    console.log(`tersedia di http://localhost:${port}`)
})