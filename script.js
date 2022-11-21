$(document).ready(function() {
  input = $("input[type=text]")
  button = $("button");
  toggleButton(); 
  
  input
    .keypress(toggleButton)
    .keyup(toggleButton);
  
  function toggleButton() { 
    len = input.val().length;

    if (len != 0) {
     button.text("Sign In");
     button.removeAttr("disabled");
     button.addClass('activeButton'); 
    } 
    else {
       button.attr("disabled", "disabled");
       button.text("Sign in");
       button.removeClass('activeButton'); 
    }
  };
$("input[type=radio]").on("change", function () {


    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">Yes</option>`)
        .append(`<option value="brains">Amazing</option>`)
        .append(`<option value="bbq">Best thing I've seen</option>`);
    } else if (radioChoice === "B") {
   
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">No</option>`)
        .append(`<option value="brains">Awful</option>`)
        .append(`<option value="bbq">Are yall stupid?</option>`);
    } else {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="banana">pick a letter...A or B</option>`);
    }
  
  function myFunction() {
  document.getElementById("mySubmit").formTarget = "_self";
  document.getElementById("demo").innerHTML = "The value of the formtarget attribute was changed from '_blank' to '_self'.";
}
  
  
  
   src="https://codepen.io/Westyler28/pen/RwJQPOE">

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt");
 

  
  
  
  
  
  });
});
