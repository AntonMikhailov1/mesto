let page = document.querySelector('.page');
let profile = page.querySelector('.profile');
let popup = page.querySelector('.popup');

let editBtn = profile.querySelector('.profile__edit-btn');
let profileName = profile.querySelector('.profile__name');
let profileDisc = profile.querySelector('.profile__disc');

let popupForm = popup.querySelector('.popup__form');
let submitBtn = popup.querySelector('.popup__submit-btn');
let closeBtn = popup.querySelector('.popup__close-btn');
let fieldName = popup.querySelector('.popup__field_input_name');
let fieldDisc = popup.querySelector('.popup__field_input_discription');

function popupOpen() {
    popup.classList.add('popup_opened');
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

editBtn.addEventListener('click', popupOpen);
closeBtn.addEventListener('click', popupClose);
popupForm.addEventListener('submit', popupSubmit);


