const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let widgetCounter = 0;
//console.log(queryString);
if (urlParams.get("reg_page")) {
  // Hide the Body Tag
  document.getElementsByTagName("BODY")[0].style.display = "none";
}
oktaSignIn.on("afterRender", function (context) {
  console.log(`Context: ${JSON.stringify(context, null, 4)}`);
  // Evaluate Application Context based on the Application.
  console.log("After Render has been fired.");
  widgetCounter++;
  console.log("widgetCounter", widgetCounter);

  if (
    (context.controller =
      "primary-auth" && urlParams.get("reg_page") && widgetCounter == 1)
  ) {
    var registrationLink = document.getElementsByClassName("link js-enroll")[0];

    // Unhide the Body Tag
    document.getElementsByTagName("BODY")[0].style.display = "";

    if (registrationLink) {
      registrationLink.click();
    }
  }
});
