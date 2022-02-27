const apiUrl = "https://reqres.in/api/users?page=2";

const data = {
    "name": "morpheus",
    "job": "leader"
}
function sendData() {
fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => {
        console.log(response);
        if (response.status == 201) {
            alert("HTTP request worked!");
        }
        return response.json();
    })
    .then(data => {
    })
    .catch((error) => console.log(error.message));

}