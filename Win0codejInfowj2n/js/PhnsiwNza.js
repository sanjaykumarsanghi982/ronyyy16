
    // Function to get URL parameter by name
    function getURLParameter(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var results = regex.exec(window.location.href);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Get the 'Ansup' parameter from URL
    var Ansup = getURLParameter('Ansup');

    // Make it globally available if needed
    window.Ansup = Ansup;

   
    
  