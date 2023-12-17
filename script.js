const form = document.querySelector(`.form`);

const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const inputContainer = document.querySelectorAll(".input-container");

const dayH1 = document.querySelector(".day-res");
const monthH1 = document.querySelector(".month-res");
const yearH1 = document.querySelector(".year-res");

const validateInputs = () => {
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();

    if(dayValue === '') {
        setError(day, 'This field is required');
    } else if (monthValue > 31 || monthValue < 0) {
        setError(day, 'Please fill a valid day');
    }
    else {
        setSuccess(day);
    }

    if(monthValue === '') {
        setError(month, 'This field is required');
    } else if (monthValue > 13 || monthValue < 0) {
        setError(month, 'Please fill a valid month');
    } else {
        setSuccess(month);
    }

    if(yearValue === '') {
        setError(year, 'This field is required');
    } else if (yearValue < 1920 || yearValue > new Date().getFullYear()) {
        setError(year, 'Please fill a valid year.')
    } else {
        setSuccess(year);
    }
};
const setError = (element, message) => {
    const inputContainer = element.parentElement;
    const errorDisplay = inputContainer.querySelector('.required-p');
  
    if (!errorDisplay) {
      const requiredP = document.createElement("p");
      requiredP.innerText = message;
      requiredP.classList.add("required-p");
      inputContainer.appendChild(requiredP);
    } else {
      errorDisplay.innerText = message;
    }
  
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
};  
const setSuccess = (element) => {
    const inputContainer = element.parentElement;
    const errorDisplay = inputContainer.querySelector('.required-p');
  
    if (errorDisplay) {
      errorDisplay.remove();
    }
  
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
};  
const datesDifference = () => {
    const dayValue = parseInt(day.value);
    const monthValue = parseInt(month.value);
    const yearValue = parseInt(year.value);

    const birthDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
    const toDay = new Date();

    const oneDayMs = 1000 * 60 * 60 * 24;
    const diffMs = toDay.getTime() - birthDate.getTime();

    const diffDays = Math.floor(diffMs / oneDayMs);
    const years = Math.floor(diffDays / 365);

    const months = Math.floor((diffDays / 30.44) % 12);
    const days = diffDays - (years * 365) - (months * 30);

    checkNaN(days, months, years);
};
const checkNaN = (day, month, year) => {
    if(isNaN(day) || isNaN(month) || isNaN(year)){
        dayH1.textContent = "- -";
        monthH1.textContent = "- -";
        yearH1.textContent = "- -";
    }else{
        setDateHTML(day, month, year);
    }
};
const setDateHTML = (day, month, year) => {
    dayH1.textContent = day;
    monthH1.textContent = month;
    yearH1.textContent = year;
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    validateInputs();
    datesDifference();
});