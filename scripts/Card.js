import {openPopup} from './index.js';
import * as elements from './elements.js';

export default class Card {
  constructor(card) {
    this._name = card.name;
    this._link = card.link;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector("#template-element").content;
    const cardElement = cardTemplate.querySelector(".element").cloneNode(true);

    return cardElement;
  }

  _createCard() {
    this._template = this._getTemplate();
    const cardImage = this._template.querySelector(".element__image");
    const cardTitle = this._template.querySelector(".element__title");
    cardImage.src = this._link;
    cardTitle.textContent = this._name;
    cardImage.alt = this._name;

    return this._template;
  }

  appendCard() {
    const cardContainer = document.querySelector(".elements__container");
    this._element = this._createCard();
    this._setEventListeners();
    cardContainer.append(this._element);
  }

  prependCard() {
    const cardContainer = document.querySelector(".elements__container");
    this._element = this._createCard();
    this._setEventListeners();
    cardContainer.prepend(this._element);
  }

  _handleDeleteCard() {
    this._element.querySelector(".element__delete-btn").closest(".element").remove();
  }

  _toggleLikeBtn() {
    this._element.querySelector(".element__like-btn").classList.toggle("element__like-btn_active");
  }

  openPopupImage() {
      const cardImage = this._template.querySelector(".element__image");
      cardImage.addEventListener('click', () => {
        elements.popupImage.src = this._link;
        elements.popupImage.alt = this._name;
        elements.popupImageCaption.textContent = this._name;
        openPopup(elements.popupImageContainer);
      });
    }

  _setEventListeners() {
    this._element.querySelector(".element__delete-btn").addEventListener("click", () => this._handleDeleteCard()); 
    this._element.querySelector(".element__like-btn").addEventListener("click", () => this._toggleLikeBtn());
  }
}
