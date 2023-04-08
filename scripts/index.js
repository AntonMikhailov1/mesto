// Page

const page = document.querySelector('.page');

// Profile
const profile = page.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDesc = profile.querySelector('.profile__desc');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');

// Popup
const popupForms = page.querySelectorAll('.popup__form');
const submitBtn = page.querySelector('.popup__submit-btn');
const closeBtns = page.querySelectorAll('.popup__close-btn');
const fieldName = page.querySelector('.popup__field_input_name');
const fieldDesc = page.querySelector('.popup__field_input_description');
const fieldPlaceName= page.querySelector('.popup__field_input_place-name');
const fieldPlaceImgLink = page.querySelector('.popup__field_input_place-img-link');

// Popup Profile
const popupProfile = page.querySelector('.popup__profile');

// Popup Elements
const popupElements = page.querySelector('.popup__elements');

// Popup Image
const popupImageContainer = page.querySelector('.popup__image-container');
const popupImage = popupImageContainer.querySelector('.popup__image');
const popupImageCaption = popupImageContainer.querySelector('.popup__image-caption');

// Cards
const cardTemplate = document.querySelector('#template-element').content;
const cardContainer= page.querySelector('.elements__container');
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

function createCard(card) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__title');
    const likeBtn = cardElement.querySelector('.element__like-btn');
    const deleteBtn = cardElement.querySelector('.element__delete-btn');
    cardImage.src = card.link;
    cardTitle.textContent = card.name;
    toggleLikeBtn(likeBtn);
    handleDeleteCard(deleteBtn);
    handlePopupImageOpen(card.name, card.link, cardImage);
    return cardElement;	
}

function appendCard(cardElement) {
  cardContainer.append(cardElement);
}

function prependCard(cardElement) {
  cardContainer.prepend(cardElement);
}

function handleDeleteCard(deleteBtn) {
  deleteBtn.addEventListener('click', () => deleteBtn.closest('.element').remove());
}

function toggleLikeBtn(LikeBtn) {
  LikeBtn.addEventListener('click', () => {
    LikeBtn.classList.toggle('element__like-btn_active')
  }); 
}

function renderInitialCards(cards) {
  cards.forEach(card => appendCard(createCard(card)));
}

renderInitialCards(cards);

function popupProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = fieldName.value;
    profileDesc.textContent = fieldDesc.value;
    popupClose(evt);
}

function popupElementsSubmit(evt) {
  evt.preventDefault();
  cards.unshift({name: fieldPlaceName.value, link: fieldPlaceImgLink.value});
  popupClose(evt);
  prependCard(createCard(cards[0]));
}

function popupProfileOpen() {
    fieldName.value = profileName.textContent;
    fieldDesc.value = profileDesc.textContent;
    popupProfile.classList.add('popup_opened');
}

function popupElementsOpen() {
    fieldPlaceName.value = '';
    fieldPlaceImgLink.value = '';
    popupElements.classList.add('popup_opened');
}

function popupImageOpen(name, link) {
  popupImage.src = link;
  popupImageCaption.textContent = name;
  popupImageContainer.classList.add('popup_opened');
}

function popupClose(evt) {
    if (evt.target.parentElement.parentElement === popupProfile) {
        popupProfile.classList.remove('popup_opened');
    };
    if (evt.target.parentElement.parentElement === popupElements) {
        popupElements.classList.remove('popup_opened');
    };
    if (evt.target.parentElement === popupImageContainer) {
      popupImageContainer.classList.remove('popup_opened');
  };
}

function handlePopupProfileOpen() {
  editBtn.addEventListener('click', popupProfileOpen);
}

handlePopupProfileOpen();

function handlePopupElementsOpen() {
  addBtn.addEventListener('click', popupElementsOpen);
}

handlePopupElementsOpen();

function handlePopupImageOpen(name, link, cardImage) {
  cardImage.addEventListener('click', () => popupImageOpen(name, link));
}

function handlePopupClose() {
  closeBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', popupClose);
  });
}

handlePopupClose()

function handlePopupSubmit() {
  popupForms.forEach(popupForm => {
    if (popupForm.parentElement.parentElement === popupProfile) {
      popupForm.addEventListener('submit', popupProfileSubmit);
    }
    if (popupForm.parentElement.parentElement === popupElements) {
      popupForm.addEventListener('submit', popupElementsSubmit);
    }
  });
}

handlePopupSubmit()
