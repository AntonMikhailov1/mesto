const page = document.querySelector('.page');

const profile = page.querySelector('.profile');

const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const profileName = profile.querySelector('.profile__name');
const profileDisc = profile.querySelector('.profile__disc');

const popup = document.content.querySelector('.popup');
const popupForm = popupTemplate.content.querySelector('.popup__form');
const submitBtn = popupTemplate.content.querySelector('.popup__submit-btn');
const closeBtn = popupTemplate.content.querySelector('.popup__close-btn');

const initialCards = [
  {
    name: 'Йосемити',
    link: '../images/yosemite.jpg'
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

function popupOpen(e) {
    popup.classList.add('popup_opened');

    console.log(e);
}



function popupClose() {
    popup.classList.remove('popup_opened');
}

function popupSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = fieldName.value;
    profileDisc.textContent = fieldDisc.value;
    popupClose();
}

function editBtnClick(btn) {
    btn.addEventListener('click', popupOpen);
    btn.addEventListener('click', popupProfile);
}

function closeBtnClick(btn) {
    btn.addEventListener('click', popupClose);
}

























// function popupProfile() {
//     const popupElement = popupTemplate.querySelector('.popup').cloneNode(true);
//     popupElement.querySelector('.popup__title').textContent = 'Редактировать профиль';
    
//     popupElement.querySelectorAll('.popup__field').forEach((e, i) => {
//         console.log(e);
//         if (i === 0) {
//             e.classList.add('popup__field_input_name');
//             e.setAttribute('value', 'Жак Ив-Кусто');
//             e.setAttribute('name', 'name');
//         }  
//         if (i === 1) {
//             e.classList.add('popup__field_input_discription');
//             e.setAttribute('value', 'Исследователь океана');
//             e.setAttribute('name', 'discription');
//         }
//     });

//     // fieldProfileInputs[0].value = profileName.textContent;
//     // fieldProfileInputs[1].value = profileDisc.textContent;
//     page.append(popupElement); 
// }






// popupForm.addEventListener('submit', popupSubmit);


