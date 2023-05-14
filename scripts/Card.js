import {openPopup} from './index.js';
import * as elements from './elements.js';

export default class Card {
  constructor(card, cardTemplate) {
    this._name = card.name;
    this._link = card.link;
    this._cardTemplate = cardTemplate;
    this._template = this._getTemplate();
    this._cardImage = this._template.querySelector(".element__image");
    this._cardTitle = this._template.querySelector(".element__title");
    this._elementDeleteBtn = this._template.querySelector(".element__delete-btn");
    this._elementLikeBtn = this._template.querySelector(".element__like-btn");
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.querySelector(".element").cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._setEventListeners();

    return this._template;
  }

  _handleDeleteCard() {
    this._elementDeleteBtn.closest(".element").remove();
  }

  _toggleLikeBtn() {
    this._elementLikeBtn.classList.toggle("element__like-btn_active");
  }

  _openPopupImage() {
    elements.popupImage.src = this._link;
    elements.popupImage.alt = this._name;
    elements.popupImageCaption.textContent = this._name;
    openPopup(elements.popupImageContainer);
  };

  _setEventListeners() {
    this._elementDeleteBtn.addEventListener("click", () => this._handleDeleteCard()); 
    this._elementLikeBtn.addEventListener("click", () => this._toggleLikeBtn());
    this._cardImage.addEventListener('click', () => this._openPopupImage());
  }
}
