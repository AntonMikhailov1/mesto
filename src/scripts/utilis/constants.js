// // Page
export const page = document.querySelector(".page");

// // Profile
export const profile = page.querySelector(".profile");
export const editBtn = profile.querySelector(".profile__edit-btn");
export const addBtn = profile.querySelector(".profile__add-btn");
export const avatarImg = profile.querySelector(".profile__avatar");
export const avatarBtn = profile.querySelector(".profile__avatar-overlay");

// // Popup Profile
export const popupProfile = page.querySelector(".popup_type_profile");
export const popupProfileForm = popupProfile.querySelector(".popup__form");

// // Popup Elements
export const popupElements = page.querySelector(".popup_type_elements");
export const popupElementsForm = popupElements.querySelector(".popup__form");

// // Popup Avatar
export const popupAvatar = page.querySelector(".popup_type_avatar");
export const popupAvatarForm = popupAvatar.querySelector(".popup__form");

// // Selectors
export const cardTemplateSelector = "#template-element";
export const popupProfileSelector = ".popup_type_profile";
export const popupElementsSelector = ".popup_type_elements";
export const popupAvatarSelector = ".popup_type_avatar";
export const popupConfirmationSelector = ".popup_type_confirmation"
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
  userAvatarSelector: ".profile__avatar"
};
