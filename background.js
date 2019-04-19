chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == 'system') {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5000/receive', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(request.options));

    console.log('Sent request from background.');

    sendResponse();
    return true;
  }
});
