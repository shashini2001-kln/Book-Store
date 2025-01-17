async function login(){
    document.getElementById('login-form').addEventListener('submit',() => {
        // Sample data to be sent as JSON
        const formData = new FormData(document.getElementById('login-form'));
        const data = {};

        // Populate the data object with form data
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data)

// Function to make a POST request with JSON body
        function postData(url, data) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Success:', JSON.parse(xhr.responseText));
                    } else {
                        console.error('Error:', xhr.statusText);
                    }
                }
            };

            xhr.send(JSON.stringify(data)); // Convert JavaScript object to JSON string
        }

// URL to which the request will be sent
        const url = 'login.php';
        postData(url,data);
    });
// Call the function
}
