export default class Card {
  constructor(cardData, cardTemplateSelector, openPopupImage) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._openPopupImage = openPopupImage;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
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

  _handleDeleteCard = () => {
    this._elementDeleteBtn.closest(".element").remove();
  };

  _handleCardClick = () => {
    this._openPopupImage(this._cardData);
  };

  _toggleLikeBtn = () => {
    this._elementLikeBtn.classList.toggle("element__like-btn_active");
  };

  _setEventListeners() {
    this._elementDeleteBtn.addEventListener("click", () => this._handleDeleteCard());
    this._elementLikeBtn.addEventListener("click", () => this._toggleLikeBtn());
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  createCard() {
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._setEventListeners();

    return this._template;
  }
}
