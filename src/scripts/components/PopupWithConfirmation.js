import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  #submitPopup;
  #popupForm;
  #submitBtn;
  #card;
  #cardId;

  constructor(popupSelector, submitPopup) {
    super(popupSelector);
    this.#submitPopup = submitPopup;
    this.#popupForm = this.popup.querySelector(".popup__form");
    this.#submitBtn = this.#popupForm.querySelector(".popup__submit-btn");
  }

  waitForResponse() {
    this.#submitBtn.textContent = "Удаление...";
  }

  setDefaultSubmitBtn() {
    this.#submitBtn.textContent = "Да";
  }

  open = ({ card, cardId }) => {
    super.open();
    this.#card = card;
    this.#cardId = cardId;
  };

  setEventListeners() {
    super.setEventListeners();
    this.#popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.#submitPopup({ card: this.#card, cardId: this.#cardId });
    });
  }
}
