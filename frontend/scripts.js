/********** Get on init ***********/
// using fetch api request method
fetch("http://localhost:8080/api/users")
  .then((response) => {
    // test if response is ok
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network Response Error");
    }
  })
  .then((data) => {
    // first entry
    let dbData = document.createElement("td");
    dbData.innerText = `${data[0].id}`;
    document.getElementById("firstRow").appendChild(dbData);
    let dbDataFN = document.createElement("td");
    dbDataFN.innerText = `${data[0].firstName}`;
    document.getElementById("firstRow").appendChild(dbDataFN);
    let dbDataLN = document.createElement("td");
    dbDataLN.innerText = `${data[0].lastName}`;
    document.getElementById("firstRow").appendChild(dbDataLN);
    let dbDataEm = document.createElement("td");
    dbDataEm.innerText = `${data[0].email}`;
    document.getElementById("firstRow").appendChild(dbDataEm);
    // second entry
    dbData = document.createElement("td");
    dbData.innerText = `${data[1].id}`;
    document.getElementById("secondRow").appendChild(dbData);
    dbDataFN = document.createElement("td");
    dbDataFN.innerText = `${data[1].firstName}`;
    document.getElementById("secondRow").appendChild(dbDataFN);
    dbDataLN = document.createElement("td");
    dbDataLN.innerText = `${data[1].lastName}`;
    document.getElementById("secondRow").appendChild(dbDataLN);
    dbDataEm = document.createElement("td");
    dbDataEm.innerText = `${data[1].email}`;
    document.getElementById("secondRow").appendChild(dbDataEm);
    // third entry
    dbData = document.createElement("td");
    dbData.innerText = `${data[2].id}`;
    document.getElementById("thirdRow").appendChild(dbData);
    dbDataFN = document.createElement("td");
    dbDataFN.innerText = `${data[2].firstName}`;
    document.getElementById("thirdRow").appendChild(dbDataFN);
    dbDataLN = document.createElement("td");
    dbDataLN.innerText = `${data[2].lastName}`;
    document.getElementById("thirdRow").appendChild(dbDataLN);
    dbDataEm = document.createElement("td");
    dbDataEm.innerText = `${data[2].email}`;
    document.getElementById("thirdRow").appendChild(dbDataEm);
  })

  // handle errors
  .catch((error) => {
    console.error("Error: ", error);
  });

/********** Get ***********/
// get data from api
function apiGet() {
  // rm outdated list
  let rowOne = document.getElementById("firstRow");
  rowOne.innerHTML = "";
  let rowTwo = document.getElementById("secondRow");
  rowTwo.innerHTML = "";

  // using fetch api request method
  fetch("http://localhost:8080/api/users")
    .then((response) => {
      // test if response is ok
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response Error");
      }
    })
    .then((data) => {
      // first entry
      let dbData = document.createElement("td");
      dbData.innerText = `${data[0].id}`;
      document.getElementById("firstRow").appendChild(dbData);
      let dbDataFN = document.createElement("td");
      dbDataFN.innerText = `${data[0].firstName}`;
      document.getElementById("firstRow").appendChild(dbDataFN);
      let dbDataLN = document.createElement("td");
      dbDataLN.innerText = `${data[0].lastName}`;
      document.getElementById("firstRow").appendChild(dbDataLN);
      let dbDataEm = document.createElement("td");
      dbDataEm.innerText = `${data[0].email}`;
      document.getElementById("firstRow").appendChild(dbDataEm);
      // second entry
      dbData = document.createElement("td");
      dbData.innerText = `${data[1].id}`;
      document.getElementById("secondRow").appendChild(dbData);
      dbDataFN = document.createElement("td");
      dbDataFN.innerText = `${data[1].firstName}`;
      document.getElementById("secondRow").appendChild(dbDataFN);
      dbDataLN = document.createElement("td");
      dbDataLN.innerText = `${data[1].lastName}`;
      document.getElementById("secondRow").appendChild(dbDataLN);
      dbDataEm = document.createElement("td");
      dbDataEm.innerText = `${data[1].email}`;
      document.getElementById("secondRow").appendChild(dbDataEm);
      // third entry
      dbData = document.createElement("td");
      dbData.innerText = `${data[2].id}`;
      document.getElementById("thirdRow").appendChild(dbData);
      dbDataFN = document.createElement("td");
      dbDataFN.innerText = `${data[2].firstName}`;
      document.getElementById("thirdRow").appendChild(dbDataFN);
      dbDataLN = document.createElement("td");
      dbDataLN.innerText = `${data[2].lastName}`;
      document.getElementById("thirdRow").appendChild(dbDataLN);
      dbDataEm = document.createElement("td");
      dbDataEm.innerText = `${data[2].email}`;
      document.getElementById("thirdRow").appendChild(dbDataEm);
    })

    // handle errors
    .catch((error) => {
      console.error("Error: ", error);
    });
}

/********** Post ***********/
// add new user
function apiPost() {
  const firstName = document.getElementById("apiFN").value;
  const lastName = document.getElementById("apiLN").value;
  const email = document.getElementById("email").value;

  // API endpoint for creating a new user
  const apiUrl = "http://localhost:8080/api/users";

  // Form data to be sent in the request body
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  // Make a POST request using the Fetch API
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response Error");
      }
    })
    .then((newData) => {
      // Process the newly created user data
      console.log("New User Data:", newData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/********** Put ***********/
// change user
function apiPut() {
  const idNum = document.getElementById("idNum").value;
  const firstName = document.getElementById("apinFN").value;
  const lastName = document.getElementById("apinLN").value;
  const email = document.getElementById("nemail").value;

  // API endpoint for creating a new user
  const apiUrl = `http://localhost:8080/api/users/${idNum}`;

  // Form data to be sent in the request body
  const formData = {
    idNum: idNum,
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  // Make a put request using the Fetch API
  fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response Error");
      }
    })
    .then((newData) => {
      // Process the newly created user data
      console.log("Modified:", newData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/********** delete ***********/
// add new user
function apiDelete() {
  const idNum = document.getElementById("idNum").value;
  const firstName = document.getElementById("apinFN").value;
  const lastName = document.getElementById("apinLN").value;
  const email = document.getElementById("nemail").value;

  // API endpoint for creating a new user
  const apiUrl = `http://localhost:8080/api/users/${idNum}`;

  // Form data to be sent in the request body
  const formData = {
    idNum: idNum,
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  // Make a delete request using the Fetch API
  fetch(apiUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network Response Error");
      }
    })
    .then((newData) => {
      // Process the newly created user data
      console.log("Deleted:", newData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
