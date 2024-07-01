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
    // es6 for of loop to get all data
    for (let dat of data) {
      //console.log(dat);
      let dbData = document.createElement("li");
      dbData.innerText = `${dat.id} ${dat.firstName} ${dat.lastName} ${dat.email}`;
      document.getElementById("getReq").appendChild(dbData);
    }
  })
  // handle errors
  .catch((error) => {
    console.error("Error: ", error);
  });

/********** Get ***********/
// get data from api
function apiGet() {
  // rm outdated list
  let list = document.getElementById("getReq");
  list.innerHTML = "";

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
      // es6 for of loop to get all data
      for (let dat of data) {
        //console.log(dat);
        let dbData = document.createElement("li");
        dbData.innerText = `${dat.id} ${dat.firstName} ${dat.lastName} ${dat.email}`;
        document.getElementById("getReq").appendChild(dbData);
      }
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
  const firstName = document.getElementById("apiFN").value;
  const lastName = document.getElementById("apiLN").value;
  const email = document.getElementById("email").value;

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
  const firstName = document.getElementById("apiFN").value;
  const lastName = document.getElementById("apiLN").value;
  const email = document.getElementById("email").value;

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
