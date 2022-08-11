// axios({
//     url: resolution.url,
//     method: 'GET',
//     responseType: 'blob', // important
//   }).then((response) => {
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'file.pdf');
//     document.body.appendChild(link);
//     // link.click();
//   });

// //   onClick={() => {
// //     download(
// //       "sqren.txt",
// //       JSON.stringify({
// //         text,
// //         text2: text,
// //       })
// //     );
// //   }}
// // >
// //   Download file
// // </h1>


// const download1 =  (filename, text) => {
//     const element = document.createElement("a");
//     const dataBlob = new Blob([text], { type: "text/plain" });
//     const objectUrl = URL.createObjectURL(dataBlob);
//     element.href = objectUrl;
//     element.download = filename;
//     element.click();
//   }

//   217

//   fetch(<"yoururl">, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + <your access token if need>
//     },
//        })
// .then((response) => response.blob())
// .then((blob) => {
// // 2. Create blob link to download
//  const url = window.URL.createObjectURL(new Blob([blob]));
// const link = document.createElement('a');
// link.href = url;
// link.setAttribute('download', `sample.xlsx`);
//  // 3. Append to html page
//  document.body.appendChild(link);
//  // 4. Force download
//  link.click();
//  // 5. Clean up and remove the link
//  link.parentNode.removeChild(link);
// })




// fetch('https://cors-anywhere.herokuapp.com/' + fileURL, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/pdf',
//     },
//   })
//   .then((response) => response.blob())
//   .then((blob) => {
//     // Create blob link to download
//     const url = window.URL.createObjectURL(
//       new Blob([blob]),
//     );
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute(
//       'download',
//       `FileName.pdf`,
//     );

//     // Append to html link element page
//     document.body.appendChild(link);

//     // Start download
//     link.click();

//     // Clean up and remove the link
//     link.parentNode.removeChild(link);
//   });




//   // NOT TICK</
//   fetchFile(){
//     axios({
//           url: `/someurl/thefiles/${this.props.file.id}`,
//           method: "GET",
//           headers: headers,
//           responseType: "blob" // important
//       }).then(response => {
//           const url = window.URL.createObjectURL(new Blob([response.data]));
//           const link = document.createElement("a");
//           link.href = url;
//           link.setAttribute(
//               "download",
//               `${this.props.file.name}.${this.props.file.mime}`
//           );
//           document.body.appendChild(link);
//           link.click();
  
//           // Clean up and remove the link
//           link.parentNode.removeChild(link);
//       });
//   }
//   render(){
//     return( <button onClick={this.fetchFile}> Download file </button>)
//   }

// //   i was working

// fetch(resolution?.url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'video/mp4',
//     },
//     mode: "no-cors",
//   })
//   .then((response) => response.blob())
//   .then((blob) => {
//     // Create blob link to download
//     const url = window.URL.createObjectURL(
//       new Blob([blob]),
//     );
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute(
//       'download',
//       `FileName.mp4`,
//     );
  
//     // Append to html link element page
//     document.body.appendChild(link);
  
//     // Start download
//     // link.click();
  
//     // Clean up and remove the link
//     link.parentNode.removeChild(link);
//   });