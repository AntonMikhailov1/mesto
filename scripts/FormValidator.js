export default class FormValidator {
  constructor(validationConfig, formElelement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._formElelement = formElelement;
    this._inputList = Array.from(this._formElelement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElelement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _toogleInputValidityText(inputElement, errorElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, errorElement);
      } else {
        this._hideInputError(inputElement, errorElement);
      }
  };

  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid)
  };

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  resetInputErrors() {
    this._toggleButtonState();
    this._inputList.forEach(inputElement => {
      const errorElement = this._formElelement.querySelector(`.${inputElement.name}-error`);
      this._hideInputError(inputElement, errorElement);
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    } 
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      const errorElement = this._formElelement.querySelector(`.${inputElement.name}-error`);
      inputElement.addEventListener('input', () => {
        this._toogleInputValidityText(inputElement, errorElement);
        this._toggleButtonState();
      });
    });
  } 

  enableValidation() {
    this._setEventListeners();
  };
}