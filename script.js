"strict mode";
const inputDay = document.querySelector(".day__field");
const inputMonth = document.querySelector(".month__field");
const inputYear = document.querySelector(".year__field");
const monthErr = document.querySelector(".month__err");
const dayLabel = document.querySelector(".label__day");
const monthLabel = document.querySelector(".label__month");
const yearLabel = document.querySelector(".label__year");
const dayErr = document.querySelector(".day__err");
const yearErr = document.querySelector(".year__err");
const errorMsg = document.querySelectorAll(".err__msg");

const submit = document.querySelector(".submit__arrow");

const displayYear = document.querySelector(".year__result");
const displayMonth = document.querySelector(".month__result");
const displayDay = document.querySelector(".day__result");

const currentDate = new Date();

// Validate input fields
// Empty input fields
const clearInputErrs = function () {
  dayErr.style.display = "none";
  inputDay.style.border = "1px solid hsl(0, 0%, 86%)";
  dayLabel.style.color = "hsl(0, 1%, 44%)";
};

const emptyFields = function () {
  // Day input field
  if (inputDay.value === "") {
    dayErr.style.display = "block";
    inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
    dayLabel.style.color = "hsl(0, 100%, 67%)";
  } else {
    dayErr.style.display = "none";
    inputDay.style.border = "1px solid hsl(0, 0%, 86%)";
    dayLabel.style.color = "hsl(0, 1%, 44%)";
  }

  // Month Input field
  if (inputMonth.value === "") {
    monthErr.style.display = "block";
    inputMonth.style.border = `1px solid hsl(0, 100%, 67%)`;
    monthLabel.style.color = "hsl(0, 100%, 67%)";
  } else {
    monthErr.style.display = "none";
    inputMonth.style.border = "1px solid hsl(0, 0%, 86%)";
    monthLabel.style.color = "hsl(0, 1%, 44%)";
  }

  //Year Input field
  if (inputYear.value === "") {
    yearErr.style.display = "block";
    inputYear.style.border = `1px solid hsl(0, 100%, 67%)`;
    yearLabel.style.color = "hsl(0, 100%, 67%)";
  } else {
    yearErr.style.display = "none";
    inputYear.style.border = "1px solid hsl(0, 0%, 86%)";
    yearLabel.style.color = "hsl(0, 1%, 44%)";
  }

  // clear errors event handlers
  inputDay.addEventListener("click", clearInputErrs);
  inputMonth.addEventListener("click", clearInputErrs);
  inputYear.addEventListener("click", clearInputErrs);
};

submit.addEventListener("click", function (e) {
  emptyFields();
});
