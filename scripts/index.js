const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const popup = page.querySelector('.popup');
const popupProfile = page.querySelector('.popup__profile');
const popupElements = page.querySelector('.popup__elements');

const profileName = profile.querySelector('.profile__name');
const profileDesc = profile.querySelector('.profile__desc');

const popupForms = page.querySelectorAll('.popup__form');
const submitBtn = page.querySelector('.popup__submit-btn');
const closeBtns = page.querySelectorAll('.popup__close-btn');
const fieldName = page.querySelector('.popup__field_input_name');
const fieldDesc = page.querySelector('.popup__field_input_description');
const fieldPlaceName= page.querySelector('.popup__field_input_place-name');
const fieldPlaceImgLink = page.querySelector('.popup__field_input_place-img-link');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#template-element').content;

function renderCards() {
  initialCards.forEach(card => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__image').src = card.link;
    cardElement.querySelector('.element__title').textContent = card.name;
    page.querySelector('.elements__container').append(cardElement);
  })
} 
renderCards();

function popupOpen(e) {
    const editBtn = profile.querySelector('.profile__edit-btn');
    const addBtn = profile.querySelector('.profile__add-btn');
    if (e.target === editBtn) {
        fieldName.value = profileName.textContent;
        fieldDesc.value = profileDesc.textContent;
        popupProfile.classList.add('popup_opened');
    };
    if (e.target === addBtn) {
        fieldPlaceName.value = '';
        fieldPlaceImgLink.value = '';
        popupElements.classList.add('popup_opened');
    };
}

function popupClose(e) {
    if (e.target.parentElement.parentElement === popupProfile) {
        popupProfile.classList.remove('popup_opened');
    };
    if (e.target.parentElement.parentElement === popupElements) {
        popupElements.classList.remove('popup_opened');
    };
}

function popupSubmit(e) {
    e.preventDefault();
    if (e.target.parentElement.parentElement === popupProfile) {
        profileName.textContent = fieldName.value;
        profileDesc.textContent = fieldDesc.value;
        popupClose(e);
    };
    if (e.target.parentElement.parentElement === popupElements) {
        initialCards.unshift({name: fieldPlaceName.value, link: fieldPlaceImgLink.value});
        const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
        cardElement.querySelector('.element__image').src = initialCards[0].link;
        cardElement.querySelector('.element__title').textContent = initialCards[0].name;
        page.querySelector('.elements__container').prepend(cardElement);
        popupClose(e);
    };
}


profile.addEventListener('click', popupOpen);

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', popupClose);
});

popupForms.forEach(popupForm => {
  popupForm.addEventListener('submit', popupSubmit);
});





