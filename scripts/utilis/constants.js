// // Page
export const page = document.querySelector(".page");

// // Content
export const content = document.querySelector(".content");

// // Profile
export const profile = content.querySelector(".profile");
export const editBtn = profile.querySelector(".profile__edit-btn");
export const addBtn = profile.querySelector(".profile__add-btn");

// // Popup Profile
export const popupProfile = page.querySelector(".popup_type_profile");
export const popupProfileForm = popupProfile.querySelector(".popup__form");

// // Popup Elements
export const popupElements = page.querySelector(".popup_type_elements");
export const popupElementsForm = popupElements.querySelector(".popup__form");

// // Initial Cards
export const cards = [
  {
    name: "Йосемити",
    link: "images/yosemite.jpg",
  },
  {
    name: "Алтай",
    link: "images/altai.jpg",
  },
  {
    name: "Исландия",
    link: "images/iceland.jpg",
  },
  {
    name: "Азорские острова",
    link: "images/azores.jpg",
  },
  {
    name: "Камчатка",
    link: "images/kamchatka.jpg",
  },
  {
    name: "Утёсы Мохер",
    link: "images/moher.jpg",
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
