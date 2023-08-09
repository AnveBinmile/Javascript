const url = `https://jsonplaceholder.typicode.com`;

// GET DATA

let getData = function () {
  return fetch(`${url}/todos`)
    .then((data) => {
      if (data) return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

getData()
  .then((data) => data.json())
  .then((data) => data.slice(0, 9))
  .then((d) => {
    console.log(d);
  });

//POST METHOD

function postData(data) {
  return fetch(`${url}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

const dummyData = {
  title: "Anvesha Karn",
  userId: 11,
  id: 10,
  completed: true,
};

postData(dummyData)
  .then((data) => data.json())
  .then((d) => console.log(d));

