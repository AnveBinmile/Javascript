const url = `https://jsonplaceholder.typicode.com`;




// GET DATA

let getData = async function () {
    const res = await fetch(`${url}/todos`);
    // console.log(res);
    const data= await res.json();
    console.log(data.slice(0,9));
};


getData();



