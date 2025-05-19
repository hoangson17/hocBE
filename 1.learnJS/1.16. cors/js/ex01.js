const getUser = async()=>{
    const response = await fetch(`http://localhost:3000/api/user`,{
        headers:{"Content-Type":"application/json",}
    });
    const data = await response.json();
    console.log(data);
}

getUser();