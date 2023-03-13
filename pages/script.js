let page = document.querySelector('.page');
let profile = page.querySelector('.profile');
let popup = page.querySelector('.popup');
let editBtn = profile.querySelector('.profile__edit-btn');
let closeBtn = popup.querySelector('.popup__close-btn');

function togglePageScroll() {
    page.classList.toggle('page_no-scroll');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function popupOpen() {
    if (!popup.classList.contains('popup_opened')) {
        popup.classList.add('popup_opened');
        togglePageScroll()
    }
}

function popupClose() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.remove('popup_opened');
        togglePageScroll()
    }
}

function popupSubmit(evt) {
    let fieldName = popup.querySelector('.popup__field-name');
    let fieldDisc = popup.querySelector('.popup__field-disc');
    let profileName = profile.querySelector('.profile__name-text');
    let profileDisc = profile.querySelector('.profile__disc');
    
    evt.preventDefault();

    if (fieldName.value === "" || 
        fieldName.value === undefined || 
        typeof (fieldName.value) === 'number') {
        alert('Пожалуйста введите Имя');
    } else {
        profileName.textContent = fieldName.value;
    }
    
    if (fieldDisc.value === "" || 
        fieldDisc.value === undefined || 
        typeof (fieldDisc.value) === 'number') {
        alert('Пожалуйста введите описание');
    } else {
        profileDisc.textContent = fieldDisc.value;
    }

    popupClose();
}

function toggleLikeBtn(btn) {
    btn.classList.toggle('element__like-btn_active');
}

let likeBtn = document.querySelectorAll('.element__like-btn');
for (let i = 0; i < likeBtn.length; i++) {
    
    likeBtn[i].addEventListener('click', function (event) {  
        event.preventDefault();

        toggleLikeBtn(this);
    }, false);
}

editBtn.addEventListener('click', popupOpen);
closeBtn.addEventListener('click', popupClose);
popup.addEventListener('submit', popupSubmit);


