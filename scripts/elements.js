// Page

export const page = document.querySelector('.page');

// Content

export const content = document.querySelector('.content');

// cardContainer

export const cardContainer = content.querySelector(".elements__container");

// Profile
export const profile = content.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileDesc = profile.querySelector('.profile__desc');
export const editBtn = profile.querySelector('.profile__edit-btn');
export const addBtn = profile.querySelector('.profile__add-btn');

// Popup
export const popupForms = Array.from(page.querySelectorAll('.popup__form'));
export const submitBtns = Array.from(page.querySelectorAll('.popup__submit-btn'));
export const closeBtns = Array.from(page.querySelectorAll('.popup__close-btn'));
export const fieldName = page.querySelector('.popup__field_input_name');
export const fieldDesc = page.querySelector('.popup__field_input_description');
export const fieldPlaceName= page.querySelector('.popup__field_input_place-name');
export const fieldPlaceImgLink = page.querySelector('.popup__field_input_place-img-link');

// Popup Profile
export const popupProfile = page.querySelector('.popup_type_profile');
export const popupProfileSubmitBtn = popupProfile.querySelector('.popup__submit-btn');
export const popupProfileForm = popupProfile.querySelector('.popup__form');

// Popup Elements
export const popupElements = page.querySelector('.popup_type_elements');
export const popupElementsSubmitBtn = popupElements.querySelector('.popup__submit-btn');
export const popupElementsForm = popupElements.querySelector('.popup__form');

// Popup Image
export const popupImageContainer = page.querySelector('.popup_type_image-container');
export const popupImage = popupImageContainer.querySelector('.popup__image');
export const popupImageCaption = popupImageContainer.querySelector('.popup__image-caption');


// Caed Template
export const cardTemplate = document.querySelector("#template-element").content;
