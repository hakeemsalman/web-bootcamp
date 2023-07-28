let count = 0;
let token;
function mark() {
  if (count == 0) {
    count++;

    var dataToSend = {
     
      grant_type: "password",
      loginType: "1",
    };

    // Make the POST request using jQuery AJAX
    $.ajax({
      type: "POST", // Request method: POST
      url: "https://auth.hrone.cloud/oauth2/token", // Replace this with your actual API endpoint URL
      data: JSON.stringify(dataToSend), // Convert the data object to a JSON string
      headers: {
        host: "auth.hrone.cloud",
        contentLength: 100,
      },
      dataType: "json", // The expected data type of the response
      
      success: function (response) {
        // This function will be executed when the request is successful
        console.log("Response:", response);
        token = response.access_token;
        $("#button").text("completed");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // This function will be executed if there's an error with the request
        console.error("Error:", errorThrown);
        alert("POST request failed!");
        $("#button").text("failed");
      },
    });
  }
}

function checkInternet() {
  while (true) {
    if (navigator.onLine) {
      break;
    } else {
      alert("No Internet");
    }
  }
}

window.addEventListener("load", function (event) {
  checkInternet();
});
