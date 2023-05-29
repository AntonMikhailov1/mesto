// // Page
export const page = document.querySelector(".page");

// // Profile
export const profile = page.querySelector(".profile");
export const editBtn = profile.querySelector(".profile__edit-btn");
export const addBtn = profile.querySelector(".profile__add-btn");

// // Popup Profile
export const popupProfile = page.querySelector(".popup_type_profile");
export const popupProfileForm = popupProfile.querySelector(".popup__form");

// // Popup Elements
export const popupElements = page.querySelector(".popup_type_elements");
export const popupElementsForm = popupElements.querySelector(".popup__form");


const yosemiteImg = new URL('../../images/yosemite.jpg', import.meta.url);
const altaiImg = new URL('../../images/altai.jpg', import.meta.url);
const icelandImg = new URL('../../images/iceland.jpg', import.meta.url);
const azoresImg = new URL('../../images/azores.jpg', import.meta.url);
const kamchatkaImg = new URL('../../images/kamchatka.jpg', import.meta.url);
const moherImg = new URL('../../images/moher.jpg', import.meta.url);

// // Initial Cards
export const cards = [
  {
    name: "Йосемити",
    link: yosemiteImg,
  },
  {
    name: "Алтай",
    link: altaiImg,
  },
  {
    name: "Исландия",
    link: icelandImg,
  },
  {
    name: "Азорские острова",
    link: azoresImg,
  },
  {
    name: "Камчатка",
    link: kamchatkaImg,
  },
  {
    name: "Утёсы Мохер",
    link: moherImg,
  },
];

// // Selectors
export const cardTemplateSelector = "#template-element";
export const popupProfileSelector = ".popup_type_profile";
export const popupElementsSelector = ".popup_type_elements";
export const popupImageContainerSelector = ".popup_type_image-container";
export const cardContainerSelector = ".elements__container";

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
};

export const profileSelectors = {
  userNameSelector: ".profile__name",
  userDescriptionSelector: ".profile__desc",
};
