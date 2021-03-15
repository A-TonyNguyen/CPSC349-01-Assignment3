(function(window)
{
    "use strict";
    var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
  
    formHandler.addSubmitHandler(function(data)
    {
      $("#titleMessage").text(data.title);
      $("#nameMessage").text(data.name);
      $("#thankyouMessage").modal()
    });

    console.log(formHandler);
  })(window);