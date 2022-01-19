const sliderParkButton = document.querySelector(
  ".hedonismfest__button_slider_park"
);
const sliderLadyButton = document.querySelector(
  ".hedonismfest__button_slider_lady"
);
const sliderDrinkButton = document.querySelector(
  ".hedonismfest__button_slider_drink"
);
const sliderExhibitionButton = document.querySelector(
  ".hedonismfest__button_slider_exhibition"
);
const sliderTeamButton = document.querySelector(
  ".hedonismfest__button_slider_team"
);

const sliderButtons = document.querySelectorAll(".hedonismfest__button");

const hedonismfestImage = document.querySelector(".hedonismfest__image");

function setImage(imageLinkValue, altValue) {
  hedonismfestImage.setAttribute("src", imageLinkValue);
  hedonismfestImage.setAttribute("alt", altValue);
}

function defaultButtonColor(buttons) {
  buttons.forEach(function (item) {
    removeActiveColorButton(item);
    addNonActiveColorButton(item);
  });
}

function addActiveColorButton(button) {
  button.classList.add("hedonismfest__button_status_active");
}

function removeActiveColorButton(button) {
  button.classList.remove("hedonismfest__button_status_active");
}

function addNonActiveColorButton(button) {
  button.classList.add("hedonismfest__button_status_non-active");
}

function setButtonColor(button) {
  defaultButtonColor(sliderButtons);
  addActiveColorButton(button);
}

sliderParkButton.addEventListener("click", function (event) {
  setImage("./images/fest-park.svg", "парк");
  setButtonColor(event.target);
});

sliderLadyButton.addEventListener("click", function (event) {
  setImage("./images/fest-lady.svg", "девушка");
  setButtonColor(event.target);
});

sliderDrinkButton.addEventListener("click", function (event) {
  setImage("./images/fest-drink.svg", "напитки");
  setButtonColor(event.target);
});

sliderExhibitionButton.addEventListener("click", function (event) {
  setImage("./images/fest-exhibition.svg", "выставка");
  setButtonColor(event.target);
});

sliderTeamButton.addEventListener("click", function (event) {
  setImage("./images/fest-team.svg", "компания");
  setButtonColor(event.target);
});

function initPage(button) {
  addActiveColorButton(button);
}

initPage(sliderLadyButton);

const popupMenu = document.querySelector(".popup_type_menu");
const menuButton = document.querySelector(".header__menu-button");
const changeCityButton = popupMenu.querySelector(".popup__change-city-button");
const popupChangeCity = document.querySelector(".popup_type_change-city");
const backButton = popupChangeCity.querySelector(".popup__back-button");
const formChangeCity = popupChangeCity.querySelector(
  ".popup__change-city-form"
);
const labelCity = formChangeCity.querySelectorAll(".popup__form-radio");
const cityName = popupMenu.querySelector(".popup__city-name");
const openDonateButtonInPopup = popupMenu.querySelector(
  ".popup__open-donate-button"
);
const openDonateButtonInHeader = document.querySelector(
  ".header__donate-button"
);
const popupDonate = document.querySelector(".popup_type_donate");
const popupTicket = document.querySelector(".popup_type_ticket");

const closeDonateButton = popupDonate.querySelector(
  ".popup__donate-close-button"
);
const closeTicketButton = popupTicket.querySelector(
  ".popup__donate-close-button"
);

const sumOfMoneyButton = popupDonate.querySelectorAll(".popup__sum-of-money");
const inputSum = popupDonate.querySelector(".popup__sum-of-money-input");
const header = document.querySelector(".header");

const ticketFormElement = document.querySelector('[name = "ticket"]');
const ticketPayment = ticketFormElement.querySelectorAll(
  '[name = "payment-ticket"]'
);

const plusButtonTicketQuantity = ticketFormElement.querySelector(".plus");
const minusButtonTicketQuantity = ticketFormElement.querySelector(".minus");
const ticketQuantityCounter = ticketFormElement.querySelector(
  ".popup__ticket-quantity"
);

function addTicketQuantity() {
  if (+ticketQuantityCounter.value < 99) {
    ticketQuantityCounter.value = +ticketQuantityCounter.value + 1;
  }
}

function subtractTicketQuantity() {
  if (+ticketQuantityCounter.value > 1) {
    ticketQuantityCounter.value = +ticketQuantityCounter.value - 1;
  }
}

plusButtonTicketQuantity.addEventListener("click", addTicketQuantity);
minusButtonTicketQuantity.addEventListener("click", subtractTicketQuantity);

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

const eventsCards = document.querySelectorAll(".events__card");
eventsCards.forEach((element) => {
  element
    .querySelector(".events__like-button")
    .addEventListener("click", (event) => {
      event.target.classList.toggle("events__like-button_active");
    });
});

menuButton.addEventListener("click", function () {
  popupMenu.classList.toggle("popup_opened");
  if (popupChangeCity.classList.contains("popup_opened")) {
    closePopup(popupChangeCity);
    closePopup(popupMenu);
    getCheckedRadio();
  }
  if (popupDonate.classList.contains("popup_opened")) {
    closePopup(popupDonate);
    closePopup(popupMenu);
  }
});

changeCityButton.addEventListener("click", function () {
  closePopup(popupMenu);
  openPopup(popupChangeCity);
});

backButton.addEventListener("click", function () {
  openPopup(popupMenu);
  closePopup(popupChangeCity);
  getCheckedRadio();
});

function getCheckedRadio() {
  labelCity.forEach(function (item) {
    if (item.checked) {
      cityName.textContent = item.value;
    }
  });
}

openDonateButtonInPopup.addEventListener("click", function () {
  closePopup(popupMenu);
  openPopup(popupDonate);
});

openDonateButtonInHeader.addEventListener("click", function () {
  openPopup(popupDonate);
});

closeDonateButton.addEventListener("click", function () {
  closePopup(popupDonate);
});
closeTicketButton.addEventListener("click", function () {
  closePopup(popupTicket);
});

sumOfMoneyButton.forEach(function (item) {
  item.addEventListener("click", function () {
    sumOfMoneyButton.forEach(function (item) {
      item.classList.remove("popup__sum-of-money_active");
    });
    item.classList.add("popup__sum-of-money_active");
  });
});

inputSum.addEventListener("click", function () {
  sumOfMoneyButton.forEach(function (item) {
    item.classList.remove("popup__sum-of-money_active");
  });
});

let prevScroll = window.scrollY;
let curScroll;

window.addEventListener("scroll", () => {
  curScroll = window.scrollY;
  let headerHidden = header.classList.contains("header_hidden");

  if (curScroll > prevScroll && !headerHidden) {
    header.classList.add("header_hidden");
  } else if (curScroll < prevScroll && headerHidden) {
    header.classList.remove("header_hidden");
  }

  prevScroll = curScroll;
});

const donateFormElement = document.querySelector('[name = "donate"]');

donateFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let donateValueInputed;

  if (document.querySelector(".popup__sum-of-money_active") != null) {
    donateValueInputed = document.querySelector(".popup__sum-of-money_active")
      .dataset.donate;
  } else {
    donateValueInputed = document.querySelector("#sum-of-money").value;
  }

  let donateFormData = {
    donateValue: donateValueInputed,
    email: donateFormElement.querySelector(".popup__email-input").value,
    payment: donateFormElement.querySelector('[name="payment"]:checked').value,
  };
  console.log(donateFormData);
  closePopup(popupDonate);
  sumOfMoneyButton.forEach(function (item) {
    item.classList.remove("popup__sum-of-money_active");
  });
  sumOfMoneyButton[0].classList.add("popup__sum-of-money_active");
  donateFormElement.reset();
});

ticketFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let ticketFormData = {
    ticketQuantity: +ticketQuantityCounter.value,
    email: ticketFormElement.querySelector(".popup__email-input").value,
    payment: ticketFormElement.querySelector('[name="payment-ticket"]:checked')
      .value,
  };
  console.log(ticketFormData);
  closePopup(popupTicket);
  ticketFormElement.reset();
});

const paymentButton = popupDonate.querySelector('.popup__donate-button');

function makePayment () {
  window.location.href = './thanks-for-help.html';
}

paymentButton.addEventListener('click', function () {
  makePayment();
})
