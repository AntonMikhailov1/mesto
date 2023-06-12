export default class FormValidator {
  #inputSelector;
  #submitButtonSelector;
  #inactiveButtonClass;
  #inputErrorClass;
  #errorClass;
  #formElelement;
  #inputList;
  #buttonElement;

  constructor(validationConfig, formElelement) {
    this.#inputSelector = validationConfig.inputSelector;
    this.#submitButtonSelector = validationConfig.submitButtonSelector;
    this.#inactiveButtonClass = validationConfig.inactiveButtonClass;
    this.#inputErrorClass = validationConfig.inputErrorClass;
    this.#errorClass = validationConfig.errorClass;
    this.#formElelement = formElelement;
    this.#inputList = Array.from(this.#formElelement.querySelectorAll(this.#inputSelector));
    this.#buttonElement = this.#formElelement.querySelector(this.#submitButtonSelector);
  }

  #showInputError(inputElement, errorElement) {
    inputElement.classList.add(this.#inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.#errorClass);
  };

  #hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this.#inputErrorClass);
    errorElement.classList.remove(this.#errorClass);
    errorElement.textContent = '';
  };

  #toogleInputValidityText(inputElement, errorElement) {
      if (!inputElement.validity.valid) {
        this.#showInputError(inputElement, errorElement);
      } else {
        this.#hideInputError(inputElement, errorElement);
      }
  };

  #hasInvalidInput() {
    return this.#inputList.some(inputElement => !inputElement.validity.valid)
  };

  #disableSubmitButton() {
    this.#buttonElement.classList.add(this.#inactiveButtonClass);
    this.#buttonElement.setAttribute('disabled', true);
  }

  #enableSubmitButton() {
    this.#buttonElement.classList.remove(this.#inactiveButtonClass);
    this.#buttonElement.removeAttribute('disabled');
  }

  #toggleButtonState() {
    if (this.#hasInvalidInput()) {
      this.#disableSubmitButton();
    } else {
      this.#enableSubmitButton();
    } 
  };

  #setEventListeners() {
    this.#inputList.forEach((inputElement) => {
      const errorElement = this.#formElelement.querySelector(`.${inputElement.name}-error`);
      inputElement.addEventListener('input', () => {
        this.#toogleInputValidityText(inputElement, errorElement);
        this.#toggleButtonState();
      });
    });
  } 

    resetInputErrors() {
    this.#toggleButtonState();
    this.#inputList.forEach(inputElement => {
      const errorElement = this.#formElelement.querySelector(`.${inputElement.name}-error`);
      this.#hideInputError(inputElement, errorElement);
    })
  }

  enableValidation() {
    this.#setEventListeners();
  };
}