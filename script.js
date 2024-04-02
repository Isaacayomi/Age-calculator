"strict mode";
let inputDay = document.querySelector(".day__field");
let inputMonth = document.querySelector(".month__field");
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

const monthsWith30Days = [4, 6, 9, 11]; // Array for easy comparison

let currentDate = new Date();
let day = inputDay.value;
let month = inputMonth.value;
let year = inputYear.value;

// Empty input fields
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
};

// Invalid date
const invalidDate = function () {
  if (isNaN(inputDay.value) || inputDay.value === "") {
    dayErr.textContent = "This field is required";
  } else if (parseInt(inputDay.value) < 1 || parseInt(inputDay.value) > 31) {
    dayErr.textContent = "Must be a valid date";
    dayErr.style.display = "block";
    inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
    dayLabel.style.color = "hsl(0, 100%, 67%)";
  } else if (isNaN(inputMonth.value) || inputMonth.value === "") {
    monthErr.textContent = "This field is required";
  } else if (
    parseInt(inputMonth.value) < 1 ||
    parseInt(inputMonth.value) > 12
  ) {
    monthErr.textContent = "Must be a valid date";
    monthErr.style.display = "block";
    inputMonth.style.border = `1px solid hsl(0, 100%, 67%)`;
    monthLabel.style.color = "hsl(0, 100%, 67%)";
  }

  if (inputYear.value > currentDate.getFullYear()) {
    yearErr.textContent = "Must be a valid year";
    yearErr.style.display = "block";
    inputYear.style.border = `1px solid hsl(0, 100%, 67%)`;
    yearLabel.style.color = "hsl(0, 100%, 67%)";
  }

  // Validation for months with 30days (September-9, April-4, June-6, November-11)

  if (
    monthsWith30Days.includes(parseInt(inputMonth.value)) &&
    inputDay.value > 30
  ) {
    dayErr.textContent = "Must be a valid date";
    dayErr.style.display = "block";
    inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
    dayLabel.style.color = "hsl(0, 100%, 67%)";
  }

  console.log(typeof inputDay.value);
  console.log(inputDay.value);
  console.log(inputMonth.value);
  console.log(typeof parseInt(inputYear.value));
};

// Validation for leap years (for years that can be divisible by 4, february has 29 days, otherwise, february has 28 days )
const isLeapYear = function () {
  if (parseInt(inputMonth.value) === 2) {
    if (parseInt(inputYear.value) % 4 === 0) {
      if (parseInt(inputDay.value) > 29) {
        dayErr.textContent = "Must be a valid date";
        dayErr.style.display = "block";
        inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
        dayLabel.style.color = "hsl(0, 100%, 67%)";
      }
    } else {
      if (parseInt(inputDay.value) > 28) {
        dayErr.textContent = "Must be a valid date";
        dayErr.style.display = "block";
        inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
        dayLabel.style.color = "hsl(0, 100%, 67%)";
      }
    }
  }
};

// Calculating Age

const calcAge = function () {
  // Creating a date object for a specific date
  let userDob = new Date(year, month - 1, day);

  // Getting the number of days in the month
  let monthDays = new Date(year, (month - 1), day).getDate();
  console.log(monthDays);
  // console.log(new Date(2003, 2, 29));

  if (day > monthDays) {
    console.log("err");
  }
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  emptyFields();
  invalidDate();
  isLeapYear();
  calcAge();
});
