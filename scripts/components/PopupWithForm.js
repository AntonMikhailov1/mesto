import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitPopup) {
    super(popupSelector);
    this._submitPopup = submitPopup;
    this.popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this.popupForm.querySelectorAll(".popup__field");
  }

  close() {
    super.close();
    this.popupForm.reset();
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
    this.popupForm.addEventListener("submit", this._submitPopup);
  }
}
