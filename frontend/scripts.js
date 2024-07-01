/********** Calculator with JS ***********/
function apiPost() {
  const firstName = document.getElementById("apiFN").value;
  const lastName = document.getElementById("apiLN").value;
  const email = document.getElementById("email").value;

  // transform data to object in JSON format
  const apiReq = new Object();
  apiReq.firstName = firstName;
  apiReq.lastName = lastName;
  apiReq.email = email;

  const apiJsonString = JSON.stringify(apiReq);

  // checking the payload
  console.log(apiJsonString);

  // sending payload to the api
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:8080/api/users");
  xhttp.setRequestHeader("Content-type", "application/json");
  //xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");
  xhttp.send(apiJsonString);
}
