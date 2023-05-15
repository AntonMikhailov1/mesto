import Card from './Card.js';
import FormValidator from './FormValidator.js';
import * as elements from './elements.js';

const cards = [
  {
    name: 'Йосемити',
    link: 'images/yosemite.jpg'
  },
  {
    name: 'Алтай',
    link: 'images/altai.jpg'
  },
  {
    name: 'Исландия',
    link: 'images/iceland.jpg'
  },
  {
    name: 'Азорские острова',
    link: 'images/azores.jpg'
  },
  {
    name: 'Камчатка',
    link: 'images/kamchatka.jpg'
  },
  {
    name: 'Утёсы Мохер',
    link: 'images/moher.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field-error_active'
}

function renderInitialCards(cards) {
  cards.forEach(card => {
    elements.cardContainer.append(createCard(card));
  });
}

renderInitialCards(cards);

const popupProfileValidator = new FormValidator(validationConfig, elements.popupProfileForm);
popupProfileValidator.enableValidation();

const popupElementsValidator = new FormValidator(validationConfig, elements.popupElementsForm);
popupElementsValidator.enableValidation();

function createCard(item) {
  const newCard = new Card(item, elements.cardTemplate);
  const cardElement = newCard.createCard();
  return cardElement
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  elements.content.classList.add('content_inactive');
  document.addEventListener('keydown', closeByEsc);
  enablePointer(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  elements.content.classList.remove('content_inactive');
  document.removeEventListener('keydown', closeByEsc);
  disablePointer(popup);
}

function submitPopupProfile(evt) {
  evt.preventDefault();
  elements.profileName.textContent = elements.fieldName.value;
  elements.profileDesc.textContent = elements.fieldDesc.value;
  closePopup(elements.popupProfile);
}

function submitPopupElements(evt) {
  evt.preventDefault();
  const cardObject = {name: elements.fieldPlaceName.value, link: elements.fieldPlaceImgLink.value};
  elements.cardContainer.prepend(createCard(cardObject));
  closePopup(elements.popupElements);
}

function openPopupProfile() {
  elements.fieldName.value = elements.profileName.textContent;
  elements.fieldDesc.value = elements.profileDesc.textContent;
  openPopup(elements.popupProfile);
  popupProfileValidator.resetInputErrors();
}

function openPopupElements() {
  elements.popupElementsForm.reset();
  openPopup(elements.popupElements);
  popupElementsValidator.resetInputErrors();
}

function handlePopupProfileOpen() {
  elements.editBtn.addEventListener('click', () => openPopupProfile(elements.popupProfile));
}

handlePopupProfileOpen();

function handlePopupElementsOpen() {
  elements.addBtn.addEventListener('click', () => openPopupElements(elements.popupElements));
}

handlePopupElementsOpen();

function handlePopupClose() {
  elements.closeBtns.forEach((closeBtn) => {
    const popup = closeBtn.closest('.popup');
    closeBtn.addEventListener('click', () => closePopup(popup));
  });
}

handlePopupClose();

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

export function enablePointer(popup) {
  popup.classList.add('popup_mouseover');
}

function disablePointer(popup) {
  popup.classList.remove('popup_mouseover');
}

function handlePopupCloseByOverlayClick() {
  const popupList = document.querySelectorAll('.popup');
  popupList.forEach(popup => {
    popup.addEventListener('pointerdown', (evt) => {
      if (evt.target.classList.contains('popup') ) {
         closePopup(popup)
      }
    })
  });
};

handlePopupCloseByOverlayClick();

function handlePopupProfileSubmit() {
  elements.popupProfile.addEventListener('submit', submitPopupProfile);
}

handlePopupProfileSubmit();

function handlePopupElementsSubmit() {
  elements.popupElements.addEventListener('submit', submitPopupElements);
}

handlePopupElementsSubmit();

