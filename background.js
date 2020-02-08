chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  //Facebook
  if (window.location.hostname.match("facebook.com") !== null) {

  } 

  console.log(request)
  console.log('sender', sender)
  console.log('sendRequest', sendResponse)
});


getCookieURL = () => {
    
}