function sendPostRequest() {
  const url = "https://api.example.com/submit";

  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
