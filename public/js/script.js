// runs when department-form is submitted
document.getElementById("form").onsubmit = () => {
  clearErrors();

  let isValid = true;
  let destination = document.getElementById("destination").value;
  let date = document.getElementById("date").value;
  let numOfTravlers = document.getElementById("travelNum").value;

  //   this checks to see if any inputs are missing
  if (destination == "none") {
    isValid = false;
    document.getElementById("desErr").style.display = "block";
  }
  if (!date) {
    isValid = false;
    document.getElementById("dateErr").style.display = "block";
  }
  console.log(numOfTravlers);

  if (!numOfTravlers) {
    isValid = false;
    document.getElementById("travlerErr").style.display = "block";
  }

  return isValid;
};

// function that clears all errors initially
function clearErrors() {
  let errors = document.getElementsByClassName("error");
  for (let error of errors) {
    error.style.display = "none";
  }
}
