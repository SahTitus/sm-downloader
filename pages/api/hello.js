// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// let link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // here put the link
// (
//     async () => {
//         let result = await dl.youtube(link); // The result is a json
//         // console.log(result);
//     }
// )();

// const fileUrl = "https://video.twimg.com/amplify_video/1488512689898930181/vid/1280x720/E5ZyulTAKJy5fad2.mp4?tag=14"
// const fileName = path.basename(fileUrl);
  
// // The path of the downloaded file on our machine
// const name = "Good mongoose"
// const dir = `${name}aasu.mp4`
// console.log(dir)
// const localFilePath = path.resolve( dir);
// console.log(localFilePath)
// try {
//   const response = await axios({
//     method: 'GET',
//     url: fileUrl,
//     responseType: 'stream',
//   }); 

//   const w = response.data.pipe(fs.createWriteStream(localFilePath));
//   // console.log(w)
//   w.on('finish', () => {
//     console.log('Successfully downloaded file!');
//   });
// } catch (err) { 
//   throw new Error(err);
// }