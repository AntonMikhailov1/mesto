import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitPopup) {
    super(popupSelector);
    this._submitPopup = submitPopup;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._submitBtn = this._popupForm.querySelector(".popup__submit-btn");
  }

  waitForResponse() {
    this._submitBtn.textContent = "Удаление...";
  }

  setDefaultSubmitBtn() {
    this._submitBtn.textContent = "Да";
  }

  open = ({ card, cardId }) => {
    super.open();
    this._card = card;
    this._cardId = cardId;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitPopup({ card: this._card, cardId: this._cardId });
    });
  }
}
