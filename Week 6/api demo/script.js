const apiUrl = "https://reqres.in/api/users?page=2";

fetch(apiUrl, {
    method: 'GET',
  })
    .then(response => {
        console.log(response);
        if (response.status == 200) {
            alert("HTTP request worked!");
        }
        return response.json();
    })
    .then(data => {

     /*   const div = document.getElementById("demo");
     console.log(data.data);
     const users = data.data;

     users.map((user, i)=> {
         const p = document.createElement("p");
         p.innerHTML = user.email;
         div.appendChild(p);
         console.log(user.email);
     })*/
    })
    .catch((error) => console.log(error.message));