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
        let output = '<h2 class="Display-4 ">Users</h2>';
        data.forEach(function(user){
            output += `
            <ul class="list-group">
                <li class="list-group-item">ID: ${user.id} </li>
                <li class="list-group-item">Name: ${user.name} </li>
                <li class="list-group-item">Email: ${user.email} </li>
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
            <ul class="list-group>
                <li class="list-group-item list-group-item-warning">ID: ${user.id} </li>
                <li class="list-group-item list-group-item-warning">Name: ${user.name} </li>
                <li class="list-group-item list-group-item-warning">Email: ${user.email} </li>
                <li class="list-group-item list-group-item-warning">City: ${user.address.city} </li>
            </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
        
    })
}