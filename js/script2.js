$(document).ready(function() {
  $('form#quiz').submit(function(event) {
    // alert('Beginning of Code');
    var gender = $("select#gender").val();
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    // document.getElementByID("#results #celebFemale1 #celebFemale2 #celebFemale3 #celebMale1 #celebMale2 #celebMale3").style.display = "none";
    // $("#results #celebFemale1 #celebFemale2 #celebFemale3 #celebMale1 #celebMale2 #celebMale3").hide();

    // alert('Beginning of If Statements');
    if (gender === 'male') {
      if (randomNumber === 1) {
        $("#results").show();
        $("#celebFemale1").show();
      } else if (randomNumber === 2) {
        $("#results").show();
        $("#celebFemale2").show();
      } else if (randomNumber === 3){
        $("#results").show();
        $("#celebFemale3").show();
      } else {
        // alert something went wrong
        $("#results").show();
        $("#error;").show();
      }
    } else if (gender === 'female') {
      if (randomNumber === 1) {
        $("#results").show();
        $("#celebMale1").show();
      } else if (randomNumber === 2) {
        $("#results").show();
        $("#celebMale2").show();
      } else if (randomNumber === 3) {
        $("#results #celebMale3").show();
        // $("#celebFemale3").show();
      } else {
        // alert something went wrong
        $("#results").show();
        $("#error;").show();
      }
    } else {
      alert("You didn't select a gender")
    }
    event.preventDefault();
  });
});
