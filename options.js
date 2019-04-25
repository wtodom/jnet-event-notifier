// Saves options to chrome.storage
function save_options() {
  var user = document.getElementById('user').value;
  var server = document.getElementById('server').value;
  var port = document.getElementById('port').value;
  var endpoint = document.getElementById('endpoint').value;
  chrome.storage.sync.set(
    {
      user: user,
      server: server,
      port: port,
      endpoint: endpoint
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      user: null,
      server: 'localhost',
      port: '5000',
      endpoint: '/receive'
    },
    function(items) {
      document.getElementById('user').value = items.user;
      document.getElementById('server').checked = items.server;
      document.getElementById('port').checked = items.port;
      document.getElementById('endpoint').checked = items.endpoint;
    }
  );
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
