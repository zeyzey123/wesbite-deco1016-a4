
// var button = document.getElementById("demo");
// button.addEventListener("click", function(){
//   // window.location ="https://www.google.com/
//   // document.getElementById("demo").innerHTML = "Hello World";
//   console.log("hello world")
// });



// function myFunction() {
//   // window.location ="https://www.google.com/"
//   document.getElementById("demo").innerHTML = "Hello World";

// }



// document.getElementById("demo").addEventListener("click", function() { alert("Sorry, you must be at least 18 years or older to apply.");});





// function validate(){
let button = document.getElementById("continue");

button.addEventListener("click", function() {
 
  let radio1 = document.getElementById('right1').checked;
  let radio2 = document.getElementById('right2').checked;
  let radio3 = document.getElementById('right3').checked;
  let errorElement= document.getElementById('error');
  // let errorElement2 = doument.getElementById('error2');

  // let vehicle1 = document.getElementById('vehicle1').checked;
  // let vehicle2 = docunent.getElementById ('vehicle2').checked;
  // let vehicle3 = document.getElementById('vehicle3').checked;
  


if ((radio1=="") && (radio2=="") && (radio3=="")){
  // alert('select one option');
 errorElement.textContent="select one option";
 errorElement.style.color="red";
  return false;
} else {
  window.location ="https://www.google.com/";
  errorElement.textContent="";
return true;
}


// if ((vehicle1=="") && (vehicle2=="") && (vehicle3=="")){
//   errorElement2.textContent="select one vehicle";
//   errorElement2.style.color="red";
//   return false;
// }else {
//   window.location="http://www,google.com/";
//   errorElement2.textContent="";
//   return true;
// }


});












//replace with the link of previous page
function newDoc(){
  window.location.assign("https://www.w3schools.com")
}











  // These are the constraints used to validate the form
  var constraints = {
    name: {
      // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z ]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "can only contain letters"
      }
    },
    email: {
      // Email is required
      presence: true,
      // and must be an email (duh)
      email: true
    },
    username: {
      // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
        maximum: 20
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z0-9]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "can only contain a-z and 0-9"
      }
    },
    password: {
      // Password is also required
      presence: true,
      // And must be at least 5 characters long
      length: {
        minimum: 5
      }
    },
    country: {
      // You also need to input where you live
      presence: true,
      // And we restrict the countries supported to Sweden
      inclusion: {
        within: ["AU"],
        // The ^ prevents the field name from being prepended to the error
        message: "^Sorry, this service is currently for Australians only"
      }
    },
    postcode: {
      // postcode is optional but if specified it must be a 4 digit long number
      format: {
        pattern: "\\d{4}",
        message: "Postcode must be 4 digits"
      },

    }
  };

  // Hook up the form so we can prevent it from being posted
  var form = document.querySelector("form");
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    handleFormSubmit(form);
  });

  // Hook up the inputs to validate on the fly
  var inputs = document.querySelectorAll("input, textarea, select");
  console.log(inputs);
  for (var i = 0; i < inputs.length; ++i) {
    inputs.item(i).addEventListener("change", function(ev) {

      var errors = validate(form, constraints) || {};
      showErrorsForInput(this, errors[this.name])
    });
  }

  function handleFormSubmit(form, input) {
    // validate the form against the constraints
    var errors = validate(form, constraints);
    // then we update the form to reflect the results
    showErrors(form, errors || {});
    if (!errors) {
      showSuccess();
    }
  }

  // Updates the inputs with the validation errors
  function showErrors(form, errors) {
    // We loop through all the inputs and show the errors for that input
    form.querySelectorAll("input[name], select[name]").forEach( function(input) {
      // Since the errors can be null if no errors were found we need to handle
      // that
      showErrorsForInput(input, errors && errors[input.name]);
    });
  }

  // Shows the errors for a specific input
  function showErrorsForInput(input, errors) {
    // This is the root of the input
    var formGroup = closestParent(input.parentNode, "form-group")
      // Find where the error messages will be insert into
      , messages = formGroup.querySelector(".messages");
    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);
    // If we have errors
    if (errors) {
      // we first mark the group has having errors
      formGroup.classList.add("has-error");
      // then we append all the errors
      errors.forEach(function(error) {
        addError(messages, error);
      });
    } else {
      // otherwise we simply mark it as success
      formGroup.classList.add("has-success");
    }
  }

  // Recusively finds the closest parent that has the specified class
  function closestParent(child, className) {
    if (!child || child == document) {
      return null;
    }
    if (child.classList.contains(className)) {
      return child;
    } else {
      return closestParent(child.parentNode, className);
    }
  }

  function resetFormGroup(formGroup) {
    // Remove the success and error classes
    formGroup.classList.remove("has-error");
    formGroup.classList.remove("has-success");
    // and remove any old messages
    formGroup.querySelectorAll(".help-block.error").forEach(function(el) {
      el.parentNode.removeChild(el);
    });
  }

  // Adds the specified error with the following markup
  // <p class="help-block error">[message]</p>
  function addError(messages, error) {
    var block = document.createElement("p");
    block.classList.add("help-block");
    block.classList.add("error");
    block.innerText = error;
    messages.appendChild(block);
  }

  function showSuccess() {
    // We made it \:D/
    alert("Success!");
  }

