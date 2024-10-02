


const GetData = async (url) => {
    

    const responce = await fetch(url, { method: "GET" });
    return await responce.json();
   
}

export default GetData;