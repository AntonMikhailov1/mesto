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
const popupProfile = page.querySelector('.popup_type_profile');

// Popup Elements
const popupElements = page.querySelector('.popup_type_elements');

// Popup Image
const popupImageContainer = page.querySelector('.popup_type_image-container');
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
    cardImage.alt = card.name;
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

function toggleLikeBtn(likeBtn) {
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('element__like-btn_active')
  }); 
}

function renderInitialCards(cards) {
  cards.forEach(card => appendCard(createCard(card)));
}

renderInitialCards(cards);

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function submitPopupProfile(evt) {
    evt.preventDefault();
    profileName.textContent = fieldName.value;
    profileDesc.textContent = fieldDesc.value;
    closePopup(popupProfile);
}

function submitPopupElements(evt) {
  evt.preventDefault();
  cards.unshift({name: fieldPlaceName.value, link: fieldPlaceImgLink.value});
  closePopup(popupElements);
  prependCard(createCard(cards[0]));
}

function openPopupProfile(popupProfile) {
    fieldName.value = profileName.textContent;
    fieldDesc.value = profileDesc.textContent;
    openPopup(popupProfile);
}

function openPopupElements(popupElements) {
    fieldPlaceName.value = '';
    fieldPlaceImgLink.value = '';
    openPopup(popupElements);
}

function openPopupImage(name, link, popupImageContainer) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupImageContainer);
}

function handlePopupProfileOpen() {
  editBtn.addEventListener('click', () => openPopupProfile(popupProfile));
}

handlePopupProfileOpen();

function handlePopupElementsOpen() {
  addBtn.addEventListener('click', () => openPopupElements(popupElements));
}

handlePopupElementsOpen();

function handlePopupImageOpen(name, link, cardImage) {
  cardImage.addEventListener('click', () => openPopupImage(name, link, popupImageContainer));
}

function handlePopupClose() {
  closeBtns.forEach((closeBtn) => {
    const popup = closeBtn.closest('.popup');
    closeBtn.addEventListener('click', () => closePopup(popup));
  });
}

handlePopupClose();

function handlePopupSubmit() {
  popupForms.forEach(popupForm => {
    if (popupForm.parentElement.parentElement === popupProfile) {
      popupForm.addEventListener('submit', submitPopupProfile);
    }
    if (popupForm.parentElement.parentElement === popupElements) {
      popupForm.addEventListener('submit', submitPopupElements);
    }
  });
}

handlePopupSubmit();
