const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const popup = page.querySelector('.popup');
const popupProfile = page.querySelector('.popup__profile');
const popupElements = page.querySelector('.popup__elements');
const popupImage = page.querySelector('.popup__image-container');

const profileName = profile.querySelector('.profile__name');
const profileDesc = profile.querySelector('.profile__desc');

const popupForms = page.querySelectorAll('.popup__form');
const submitBtn = page.querySelector('.popup__submit-btn');
const closeBtns = page.querySelectorAll('.popup__close-btn');
const fieldName = page.querySelector('.popup__field_input_name');
const fieldDesc = page.querySelector('.popup__field_input_description');
const fieldPlaceName= page.querySelector('.popup__field_input_place-name');
const fieldPlaceImgLink = page.querySelector('.popup__field_input_place-img-link');

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

function renderCards(cards) {
  const cardTemplate = document.querySelector('#template-element').content;
  cards.forEach(card => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__title');
    const likeBtn = cardElement.querySelector('.element__like-btn');
    cardImage.src = card.link;
    cardTitle.textContent = card.name;
    toggleLikeBtn(likeBtn);
    page.querySelector('.elements__container').append(cardElement);
    return cardElement;
  });
}

function openCardImage(img) {
  const imageCaption = page.querySelector(".popup__image-caption");
  const image = page.querySelector('.popup__image');
  image.src = img.link;
  imageCaption.textContent = img.name;
  popupImage.classList.add('popup_opened');
}

function toggleLikeBtn(btn) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('element__like-btn_active')
  }); 
}

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
    if (e.target.parentElement.parentElement === popupImage) {
      popupElements.classList.remove('popup_opened');
  };
}

function popupSubmit(e) {
    if (e.target.parentElement.parentElement === popupProfile) {
        e.preventDefault();
        profileName.textContent = fieldName.value;
        profileDesc.textContent = fieldDesc.value;
        popupClose(e);
    };
    if (e.target.parentElement.parentElement === popupElements) {
        e.preventDefault();
        cards.unshift({name: fieldPlaceName.value, link: fieldPlaceImgLink.value});
        const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
        const cardImage = cardElement.querySelector('.element__image');
        const cardTitle = cardElement.querySelector('.element__title');
        const likeBtn = cardElement.querySelector('.element__like-btn');
        cardImage.src = cards[0].link;
        cardTitle.textContent = cards[0].name;
        toggleLikeBtn(likeBtn);
        page.querySelector('.elements__container').prepend(cardElement);
        deleteCard();
        popupClose(e);
    };
}

function deleteCard() {
  const deleteBtns = page.querySelectorAll('.element__delete-btn');
  deleteBtns.forEach((deleteBtn, i) => {
    deleteBtn.addEventListener('click', () => {
      cards.splice(i, 1);
      deleteBtn.parentElement.remove();
    });
  });
};

renderCards(cards);

deleteCard();

profile.addEventListener('click', popupOpen);

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', popupClose);
});

popupForms.forEach(popupForm => {
  popupForm.addEventListener('submit', popupSubmit);
});


