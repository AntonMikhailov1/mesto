import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitPopup) {
    super(popupSelector);
    this._submitPopup = submitPopup;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__field");
    this._submitBtn = this._popupForm.querySelector(".popup__submit-btn");
  }

  waitForResponse() {
    this._submitBtn.textContent = "Сохранение...";
  }

  setDefaultSubmitBtn() {
    this._submitBtn.textContent = "Сохранить";
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(inputValues) {
    this._inputList.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._submitPopup);
  }
}
