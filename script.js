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

const dayErrorParagraph = document.querySelector(".day__error__paragraph");
const monthErrorParagraph = document.querySelector(".month__error__paragraph");
const yearErrorParagraph = document.querySelector(".year__error__paragraph");

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
    displayDay.innerHTML = `--`;
    return;
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
    return;
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
    return;
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
    monthErr.textContent = "Must be a valid month";
    monthErr.style.display = "block";
    inputMonth.style.border = `1px solid hsl(0, 100%, 67%)`;
    monthLabel.style.color = "hsl(0, 100%, 67%)";
  }

  if (inputYear.value > currentDate.getFullYear()) {
    yearErr.textContent = "Year must be in the past";
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
  return;
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
        return;
      }
    } else {
      if (parseInt(inputDay.value) > 28) {
        dayErr.textContent = "Must be a valid date";
        dayErr.style.display = "block";
        inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
        dayLabel.style.color = "hsl(0, 100%, 67%)";
        return;
      }
    }
  }
};

// Error message for dates in the future
const futureIncorrectDetails = function () {
  if (
    parseInt(inputYear.value) === currentDate.getFullYear() &&
    parseInt(inputMonth.value) > currentDate.getMonth() &&
    parseInt(inputDay.value) > currentDate.getDate()
  ) {
    dayErr.textContent = "Day must be in the past";
    monthErr.textContent = "Month must be in the past";
    yearErr.textContent = "Year must be in the past";

    dayErr.style.display = "block";
    monthErr.style.display = "block";
    yearErr.style.display = "block";

    inputYear.style.border = `1px solid hsl(0, 100%, 67%)`;
    inputMonth.style.border = `1px solid hsl(0, 100%, 67%)`;
    inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
    return;
  }
};

// Calculating Age
const calcAge = function () {
  // Check if year is 0
  if (parseInt(inputYear.value) === 0) {
    yearErr.textContent = "Year cannot be zero";
    yearErr.style.display = "block";
    inputYear.style.border = `1px solid hsl(0, 100%, 67%)`;
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    return; // Exit the function if year is 0
  }

  // Creating a date object for a specific date
  let userDob = new Date(
    parseInt(inputYear.value),
    parseInt(inputMonth.value) - 1,
    inputDay.value
  );

  if (userDob > currentDate) {
    //Invalid Date
    dayErr.textContent = "Must be a valid date";
    dayErr.style.display = "block";
    inputDay.style.border = `1px solid hsl(0, 100%, 67%)`;
    dayLabel.style.color = "hsl(0, 100%, 67%)";

    //Invalid Month
    monthErr.textContent = "Must be a valid date";
    monthErr.style.display = "block";
    inputMonth.style.border = `1px solid hsl(0, 100%, 67%)`;
    monthLabel.style.color = "hsl(0, 100%, 67%)";

    //Invalid Year
    yearErr.textContent = "Must be a valid year";
    yearErr.style.display = "block";
    inputYear.style.border = `1px solid hsl(0, 100%, 67%)`;
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    return;
  }
  console.log(userDob);
  console.log(currentDate);

  // Getting the number of days in the month
  let monthDays = new Date(
    parseInt(inputYear.value),
    parseInt(inputMonth.value) - 1,
    parseInt(inputDay.value)
  ).getDate();
  if (parseInt(inputDay.value) > monthDays) {
    dayErr.style.display = "block";
    displayDay.textContent = "--";
    return;
  } else {
    dayErr.style.display = "none";
  }

  // Differences
  let userYear = currentDate.getFullYear() - userDob.getFullYear();
  let userMonth = currentDate.getMonth() - userDob.getMonth();
  let userDay = currentDate.getDate() - userDob.getDate();

  if (userDay < 0) {
    userMonth--;

    let daysInPreviousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    userDay += daysInPreviousMonth;
  }

  if (userMonth < 0) {
    userYear--;
    userMonth += 12;
  }

  displayYear.textContent = userYear;
  displayMonth.textContent = userMonth;
  displayDay.textContent = userDay;

  // Counting animation
  let dayResult = 0;
  let monthResult = 0;
  yearResult = 0;

  const interval = setInterval(() => {
    if (
      dayResult < userDay ||
      monthResult < userMonth ||
      yearResult < userYear
    ) {
      if (dayResult < userDay) {
        dayResult++;
        displayDay.textContent = dayResult;
      }
      if (monthResult < userMonth) {
        monthResult++;
        displayMonth.textContent = monthResult;
      }
      if (yearResult < userYear) {
        yearResult++;
        displayYear.textContent = yearResult;
      }
    } else {
      clearInterval(interval);
    }
  }, 50);
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  // Perform error checks first
  emptyFields();
  invalidDate();
  isLeapYear();
  futureIncorrectDetails();

  // Check if any error message is displayed for any input field
  if (
    dayErr.style.display === "block" ||
    monthErr.style.display === "block" ||
    yearErr.style.display === "block"
  ) {
    return; // Exit the function if any error message is displayed
  }

  // Proceed to calculate age
  calcAge();
});
