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
            <ul class="list-group mb-2">
                <li class="list-group-item list-group-item-info">ID: ${user.id} </li>
                <li class="list-group-item list-group-item-info">Name: ${user.name} </li>
                <li class="list-group-item list-group-item-info">Email: ${user.email} </li>
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
            <ul class="card text-white bg-info mb-3>
                <div class="card-body">ID: ${user.id} </div>
                <div class="card-body">Name: ${user.name} </div>
                <div class="card-body">Email: ${user.email} </div>
                <div class="card-body">City: ${user.address.city} </div>
            </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
        
    })
}