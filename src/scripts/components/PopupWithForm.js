import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  #submitPopup;
  #popupForm;
  #inputList;
  #submitBtn;
  #formValues;

  constructor(popupSelector, submitPopup) {
    super(popupSelector);
    this.#submitPopup = submitPopup;
    this.#popupForm = this.popup.querySelector(".popup__form");
    this.#inputList = this.#popupForm.querySelectorAll(".popup__field");
    this.#submitBtn = this.#popupForm.querySelector(".popup__submit-btn");
  }

  waitForResponse() {
    this.#submitBtn.textContent = "Сохранение...";
  }

  setDefaultSubmitBtn() {
    this.#submitBtn.textContent = "Сохранить";
  }

  close() {
    super.close();
    this.#popupForm.reset();
  }

  #getInputValues() {
    this.#formValues = {};
    this.#inputList.forEach((input) => {
      this.#formValues[input.name] = input.value;
    });
    return this.#formValues;
  }

  setInputValues(inputValues) {
    this.#inputList.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this.#popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.#submitBtn.textContent = "Сохранение...";
      this.#submitPopup(this.#getInputValues());
    });
  }
}
