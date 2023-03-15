let page = document.querySelector('.page');
let profile = page.querySelector('.profile');
let popup = page.querySelector('.popup');

let editBtn = profile.querySelector('.profile__edit-btn');
let profileName = profile.querySelector('.profile__name-text');
let profileDisc = profile.querySelector('.profile__disc');

let closeBtn = popup.querySelector('.popup__close-btn');
let fieldName = popup.querySelector('.popup__field-name');
let fieldDisc = popup.querySelector('.popup__field-disc');

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
popup.addEventListener('submit', popupSubmit);


