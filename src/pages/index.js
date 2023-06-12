import "./index.css";
import Api from "../scripts/components/Api";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation";
import {
  validationConfig,
  profileSelectors,
  cardTemplateSelector,
  popupProfileSelector,
  popupElementsSelector,
  popupAvatarSelector,
  popupConfirmationSelector,
  popupImageContainerSelector,
  cardContainerSelector,
  popupProfileForm,
  popupElementsForm,
  popupAvatarForm,
  editBtn,
  addBtn,
  avatarBtn
} from "../scripts/utilis/constants.js";

// API
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "31b1a0e8-a4ec-4528-867c-b08055bd3ffe",
    "Content-Type": "application/json",
  },
});

// userInfo INSTANCE
const userInfo = new UserInfo(profileSelectors);

// CREATE NEW CARD FUNCTION
function createNewCard(item) {
  const newCard = new Card(
    userInfo.myId,
    item,
    cardTemplateSelector,
    popupImage.open,
    popupConfirmation.open,
    (elementLikeBtn, cardId) => {
      if (elementLikeBtn.classList.contains("element__like-btn_active")) {
        api
          .deleteCardLike(cardId)
          .then((res) => {
            newCard.toggleLikeBtn(res.likes);
          })
          .catch((err) => console.error("Ошибка при убирании лайка:", err));
      } else {
        api
          .addCardLike(cardId)
          .then((res) => {
            newCard.toggleLikeBtn(res.likes);
          })
          .catch((err) => console.error("Ошибка при добавлении лайка:", err));
      }
    }
  );
  return newCard.createCard();
}

// // RENDERING SECTION
const section = new Section((item) => {
  section.appendItem(createNewCard(item));
}, cardContainerSelector);

// popupImage INSTANCE
const popupImage = new PopupWithImage(popupImageContainerSelector);
popupImage.setEventListeners();

// popupConfirmation INSTANCE
const popupConfirmation = new PopupWithConfirmation(
  popupConfirmationSelector,
  ({ card, cardId }) => {
    popupConfirmation.waitForResponse();
    api
      .deleteCard(cardId)
      .then(() => {
        card.deleteCard();
        
      })
      .catch((err) => console.error(err))
      .finally(() => popupConfirmation.setDefaultSubmitBtn());
    popupConfirmation.close();
  }
);
popupConfirmation.setEventListeners();

// popupProfile INSTANCE
const popupProfile = new PopupWithForm(popupProfileSelector, (inputValues) => {
  popupProfile.waitForResponse();
  api
    .setProfileInfo(inputValues)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupProfile.close();
    })
    .catch((err) => console.error(err))
    .finally(() => popupProfile.setDefaultSubmitBtn());
});
popupProfile.setEventListeners();

// popupAvatar INSTANCE
const popupAvatar = new PopupWithForm(popupAvatarSelector, (inputValues) => {
  popupAvatar.waitForResponse();
  api
    .setAvatar(inputValues)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupAvatar.close();
    })
    .catch((err) => console.error(err))
    .finally(() => popupAvatar.setDefaultSubmitBtn());
});
popupAvatar.setEventListeners();

// popupElements INSTANCE
const popupElements = new PopupWithForm(popupElementsSelector, (inputValues) => {
  popupElements.waitForResponse();
  api
    .addCard(inputValues)
    .then((item) => {
      section.prependItem(createNewCard(item));
      popupElements.close();
    })
    .catch((err) => console.error(err))
    .finally(() => popupElements.setDefaultSubmitBtn());
});
popupElements.setEventListeners();

// popupProfile VALIDATION
const popupProfileValidator = new FormValidator(
  validationConfig,
  popupProfileForm
);
popupProfileValidator.enableValidation();

// popupElements VALIDATION
const popupElementsValidator = new FormValidator(
  validationConfig,
  popupElementsForm
);
popupElementsValidator.enableValidation();

// popupAvatar VALIDATION
const popupAvatarValidator = new FormValidator(
  validationConfig,
  popupAvatarForm
);
popupAvatarValidator.enableValidation();

// popupProfile CLICK LISTENER
function handlePopupProfileOpen() {
  editBtn.addEventListener("click", () => {
    popupProfileValidator.resetInputErrors();
    popupProfile.setInputValues(userInfo.getUserInfo());
    popupProfile.open();
  });
}
handlePopupProfileOpen();

// popupElements CLICK LISTENER
function handlePopupElementsOpen() {
  addBtn.addEventListener("click", () => {
    popupElementsValidator.resetInputErrors();
    popupElements.open();
  });
}
handlePopupElementsOpen();

// popupAvatar CLICK LISTENER
function handlePopupAvatarOpen() {
  avatarBtn.addEventListener("click", () => {
    popupAvatarValidator.resetInputErrors();
    popupAvatar.open();
  });
}
handlePopupAvatarOpen();

// PROMISE.ALL API
Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    section.renderItems(cardData);
  })
  .catch((err) => console.error(err));