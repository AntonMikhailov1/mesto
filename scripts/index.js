const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const popupProfile = page.querySelector('.popup__profile');
const popupElements = page.querySelector('.popup__elements');
const popupImage = page.querySelector('.popup__image-container');

const profileName = profile.querySelector('.profile__name');
const profileDesc = profile.querySelector('.profile__desc');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');

const popupForms = page.querySelectorAll('.popup__form');
const submitBtn = page.querySelector('.popup__submit-btn');
const closeBtns = page.querySelectorAll('.popup__close-btn');
const fieldName = page.querySelector('.popup__field_input_name');
const fieldDesc = page.querySelector('.popup__field_input_description');
const fieldPlaceName= page.querySelector('.popup__field_input_place-name');
const fieldPlaceImgLink = page.querySelector('.popup__field_input_place-img-link');

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
    cardImage.src = card.link;
    cardTitle.textContent = card.name;
    toggleLikeBtn(likeBtn);
    handleDeleteCard(evt);
    return cardElement;	
}

function appendCard(cardElement) {
  cardContainer.append(cardElement);
}

function prependCard(cardElement) {
  cardContainer.prepend(cardElement);
}

function renderInitialCards(cards) {
  cards.forEach(card => appendCard(createCard(card)));
}

function toggleLikeBtn(btn) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('element__like-btn_active')
  }); 
}

function handleDeleteCard() {
  const deleteBtn = page.querySelector('.element__delete-btn');
  deleteBtn.addEventListener('click', deleteCard);
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
};

renderInitialCards(cards);

// function openCardImage(name, link) {
//   const imageCaption = page.querySelector(".popup__image-caption");
//   const image = page.querySelector('.popup__image');
//   image.src = link;
//   imageCaption.textContent = name;
//   popupOpen(e);
// }

function popupProfileSubmit(e) {
    e.preventDefault();
    profileName.textContent = fieldName.value;
    profileDesc.textContent = fieldDesc.value;
    popupClose(e);
}

function popupElementsSubmit(e) {
  e.preventDefault();
  cards.unshift({name: fieldPlaceName.value, link: fieldPlaceImgLink.value});
  popupClose(e);
  prependCard(createCard(cards[0]));
  deleteCard();
}
//     if (e.target.parentElement.parentElement === popupElements) {
//         e.preventDefault();
        
//         const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//         const cardImage = cardElement.querySelector('.element__image');
//         const cardTitle = cardElement.querySelector('.element__title');
//         const likeBtn = cardElement.querySelector('.element__like-btn');
//         cardImage.src = cards[0].link;
//         cardTitle.textContent = cards[0].name;
//         toggleLikeBtn(likeBtn);
//         page.querySelector('.elements__container').prepend(cardElement);
//         deleteCard();
//         popupClose(e);
//     };

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

function popupClose(e) {
    if (e.target.parentElement.parentElement === popupProfile) {
        popupProfile.classList.remove('popup_opened');
    };
    if (e.target.parentElement.parentElement === popupElements) {
        popupElements.classList.remove('popup_opened');
    };
    if (e.target.parentElement.parentElement === popupImage) {
      popupElements.classList.remove('popup_opened');
  };
}

deleteCard();

editBtn.addEventListener('click', popupProfileOpen);

addBtn.addEventListener('click', popupElementsOpen);

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', popupClose);
});

popupForms.forEach(popupForm => {
  if (popupForm.parentElement.parentElement === popupProfile) {
    popupForm.addEventListener('submit', popupProfileSubmit);
  }
  if (popupForm.parentElement.parentElement === popupElements) {
    popupForm.addEventListener('submit', popupElementsSubmit);
  }
});


