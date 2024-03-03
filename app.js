document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getJSON').addEventListener('click', getUsers);
document.getElementById('getAPI').addEventListener('click', getAPI);


function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data
    })
}


function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output += `
            <ul>
                <li>ID: ${user.id} </li>
                <li>Name: ${user.name} </li>
                <li>Email: ${user.email} </li>
            </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
        
    })
}

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output += `
            <ul>
                <li>ID: ${user.id} </li>
                <li>Name: ${user.name} </li>
                <li>Email: ${user.email} </li>
                <li>City: ${user.address.city} </li>
            </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
        
    })
}