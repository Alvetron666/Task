/* FORM */
let form = document.querySelector(".form");
/* DESC */
let descInput = document.getElementById("desc__input");
let descCounter = document.querySelector(".desc__counter");
let descErrorMax = document.querySelector(".desc__error-max");
let descErrorRequired = document.querySelector(".desc__error-required");
/* CONFIRM */
let confirmRadio = document.getElementById("confirm__radio");
let confirmError = document.querySelector(".confirm__error-required");
/* SELECT */
let select = document.getElementById("select-block__select");
let selectError = document.querySelector(".select__error-required")
/* PRICE */
let priceNetto = document.getElementById("price__netto");
let priceBrutto = document.getElementById("price__brutto");
let priceError = document.querySelector(".price__error")
/* SUBMIT BUTTON */
let formSubmit = document.getElementById("form__submit");
/* CONGRATULATIONS MESSAGE */
let congBlock = document.querySelector(".congr-mess");
/* ERROR MEss */
let errorBlock = document.querySelector(".error-mess");
let errorCloseBtn = document.querySelector(".error__close");

confirmRadio.checked = false;


const counter = () => {
  let string = descInput.value;

  if(string.length <= 255) {
    descCounter.textContent = string.length;
    
    if(string.length === 255) {
      descCounter.classList.add('max');
      descErrorMax.classList.add('db');
    }
    else if(string.length < 255 && descCounter.classList.contains('max') && descErrorMax.classList.contains('db')) {
      descCounter.classList.remove('max')
      descErrorMax.classList.remove('db')
    }
  }
}

const optionChecker = () => {
  if(select.value !== "choose") {
    priceNetto.removeAttribute("disabled");
    bruttoCalc();
  }
}

const bruttoCalc = () => {
  let rexExp = /^[0-9,.]+$/;
  let netto = priceNetto.value;
  let brutto = priceBrutto;
  let vat = select.value;

  if(rexExp.test(netto)) {
    brutto.value = +netto + +netto * vat; 
  }
}

const catchBruttoError = () => {
  let rexExp = /^[0-9,.]+$/;
  let netto = priceNetto.value;

  if(!rexExp.test(netto)) {
    priceError.classList.add("db");
  }
  else if(priceError.classList.contains("db")) {
    priceError.classList.remove("db");
  }
}

const CloseError = () => {
  errorBlock.style.display = "none";
}

const formChecker = () => {
  descInput.value === "" ? descErrorRequired.classList.add("db") : descErrorRequired.classList.remove("db");
  !confirmRadio.checked ? confirmError.classList.add("db") : confirmError.classList.remove("db");
  select.value === "choose" ? selectError.classList.add("db") : selectError.classList.remove("db");}

function sendData(e) {
  e.preventDefault();
  let formData = new FormData(this);

  fetch("https://api.openweathermap.org/data/2.5/weather?id=703448&appid=c3e4df96faf834664217c9bb7db6bdf2", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if(response.status === 200) {
      form.style.display = "none";
      congBlock.style.display = "flex";
    }
    return response;
  })
  .catch(error => {
    errorBlock.style.display = "flex";
    console.error("error");
    
  })
}

descInput.oninput = counter;
select.onchange = optionChecker;
priceNetto.oninput = () => {
  bruttoCalc();
  catchBruttoError()
};
errorCloseBtn.onclick = CloseError;
formSubmit.onclick = formChecker;
form.onsubmit = sendData;

