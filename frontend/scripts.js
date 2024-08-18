/************************************/
/********** Register user ***********/
/************************************/
async function register() {
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // Form data to be sent in the request body
  const newUser = {
    username: username,
    phone: phone,
    password: password,
  };

  // API endpoint for creating a new user
  let registrationApi = new URL('http://localhost:8080/api/user');

  // Posting the data to the api using fetch method
  let newUserData = await fetch(registrationApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    // send the registeredUser in json format
    body: JSON.stringify(newUser),
  });

  // parse the sent data to json format
  let registeredUser = await newUserData.json();

  // log sent data
  console.log(registeredUser);
}

/************************************************/
/********* Get Registered User's Data ***********/
/************************************************/
// API endpoint for registered user
let registeredUser = new URL('http://localhost:8080/api/user/${id}');

// Get is the default request using fetch method
let registeredUserData = await fetch(registeredUser);

// parse the received data into json format
let registeredUserDataJson = await registeredUserData.json();

/***********************************/
/********** deposit cash ***********/
/***********************************/
async function deposit() {
  const deposit = prompt('Deposit Amount: ');

  // Form data to be sent in the request body
  const newBalance = {
    balance: deposit,
  };

  // Posting the data to the api using fetch method
  let newBalanceData = await fetch(registeredUser, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    // send the registeredUser in json format
    body: JSON.stringify(newBalance),
  });

  // parse the sent data to json format
  let depositedBalance = await newBalanceData.json();

  // log sent data
  console.log(depositedBalance);
}

/***********************************/
/********* withdraw cash ***********/
/***********************************/
async function withdraw() {
  const withdraw = prompt('Withdraw Amount: ');

  // Form data to be sent in the request body
  const newBalance = {
    balance: withdraw,
  };

  // Posting the data to the api using fetch method
  let newBalanceData = await fetch(registeredUser, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    // send the registeredUser in json format
    body: JSON.stringify(newBalance),
  });

  // parse the sent data to json format
  let withdrawnBalance = await newBalanceData.json();

  // log sent data
  console.log(withdrawnBalance);
}

/*******************************/
/********* send cash ***********/
/*******************************/
async function send() {
  const receiver = prompt("Receiver's Phone Number: ");
  const send = prompt('Amount: ');

  // Form data to be sent in the request body
  const newBalance = {
    phone: receiver,
    balance: send,
  };

  // Posting the data to the api using fetch method
  let newBalanceData = await fetch(registeredUser, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    // send the registeredUser in json format
    body: JSON.stringify(newBalance),
  });

  // parse the sent data to json format
  let sentBalance = await newBalanceData.json();

  // log sent data
  console.log(sentBalance);
}

/********************************************/
/********* delete registered user ***********/
/********************************************/
async function deleteAccount() {
  const name = prompt('Confirm Username: ');
  const phone = prompt('Confirm Phone Number: ');

  // Form data to be sent in the request body
  const currentUser = {
    name: name,
    phone: phone,
  };

  // Posting the data to the api using fetch method
  let deletedUser = await fetch(registeredUser, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    // send the registeredUser in json format
    body: JSON.stringify(currentUser),
  });

  // parse the sent data to json format
  let fullyDeletedUser = await deletedUser.json();

  // log sent data
  console.log(fullyDeletedUser.message);
}
