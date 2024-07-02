const apiUrl = 'http://localhost:8080/api/users';

document.getElementById('add-user-form').addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = {}
    formData.forEach((value, key) => {
        jsonData[key] = value
    })
    console.log(jsonData)
    fetch(`${apiUrl}/addUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            getUserList();
        })
        .catch((error) => console.error(error));
})

// Display Users
document.getElementById('display-users-btn').addEventListener('click', () => {
    getUserList();
});

// Get User List
const getUserList = () =>{
    fetch(`${apiUrl}`)
  .then((response) => response.json())
  .then((data) => {
        const userListUl = document.getElementById('user-list-ul');
        userListUl.innerHTML = '';
        data.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.firstname} ${user.lastname} - ${user.email}`;
            listItem.dataset.userId = user.id;
            listItem.addEventListener('click', () => {
                getUserDetails(user.id);
            });
            userListUl.appendChild(listItem);
        });
    })
  .catch((error) => console.error(error)); // added closing parenthesis
};

// Get User Details (you need to define this function)
const getUserDetails = (userId) => {
    // implement the logic to get user details
    console.log(`Getting user details for ${userId}`);
};