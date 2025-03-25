/*
Content-Type
- application/json --> chỉ text
- application/x-www-form-urlencode  --> chỉ text
- multipart/form-data --> upload file và text
*/

const imageEL = document.querySelector(".image");
const buttonEL = document.querySelector("button");
buttonEL.addEventListener("click",async()=>{
    const image = imageEL.files[0];
    // console.log(files);
    const formData = new FormData();
    formData.append('file',image);
    // console.log(image);
    const response = await fetch("https://api.escuelajs.co/api/v1/files/upload",{
        method:"POST",
        body:formData,
    });
    const data = await response.json();
    console.log(data);
})

