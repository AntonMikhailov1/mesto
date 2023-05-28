import Card from "./components/Card.js";
import Section from "./components/Section.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import {
  cards,
  validationConfig,
  profileSelectors,
  cardTemplateSelector,
  popupProfileSelector,
  popupElementsSelector,
  popupImageContainerSelector,
  cardContainerSelector,
  popupProfileForm,
  popupElementsForm,
  editBtn,
  addBtn,
} from "./utilis/constants.js";

const userInfo = new UserInfo(profileSelectors);

const popupImage = new PopupWithImage(popupImageContainerSelector);
popupImage.setEventListeners();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
});
popupProfile.setEventListeners();

const popupElements = new PopupWithForm(popupElementsSelector, (evt) => {
  evt.preventDefault();
  const card = new Card(
    popupElements.getInputValues(),
    cardTemplateSelector,
    popupImage.open
  );
  section.cardContainer.prepend(card.createCard());
  popupElements.close();
});
popupElements.setEventListeners();

const section = new Section(
  {
    items: cards,
    renderer: (item) => {
      const newCard = new Card(
        item, 
        cardTemplateSelector, 
        popupImage.open
      );
      const cardElement = newCard.createCard();
      return cardElement;
    },
  },
  cardContainerSelector
);
section.renderItems();

const popupProfileValidator = new FormValidator(
  validationConfig,
  popupProfileForm
);
popupProfileValidator.enableValidation();

const popupElementsValidator = new FormValidator(
  validationConfig,
  popupElementsForm
);
popupElementsValidator.enableValidation();

function handlePopupProfileOpen() {
  editBtn.addEventListener("click", () => {
    popupProfileValidator.resetInputErrors;
    popupProfile.setInputValues(userInfo.getUserInfo());
    popupProfile.open();
  });
}
handlePopupProfileOpen();

function handlePopupElementsOpen() {
  addBtn.addEventListener("click", () => {
    popupElements.popupForm.reset();
    popupElements.open();
  });
}
handlePopupElementsOpen();
