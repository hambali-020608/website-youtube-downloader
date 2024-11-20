const axios = require('axios');

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav', '4k'];
const formatVideo = ['360', '480', '720', '1080', '1440'];

const ddownr = {
  download: async (url, format) => {
    try {
      const response = await axios.get(`https://download-go.vercel.app/api/download?url=${url}&format=${format}`);
      const data = response.data;
      return data
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      return { success: false, message: error.message };
    }
  },

 
};

export default async function download(url, format) {
  return await ddownr.download(url, format);
}
