export default class Card {
  constructor(
    cardData,
    cardTemplateSelector,
    openPopupImage,
    openPopupWithConfirmation,
    setLike) {
    this._myId = "e9770ec0528dde082527ef10";
    this._cardData = cardData;
    this._id = cardData.owner._id;
    this._cardId = cardData._id;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._openPopupImage = openPopupImage;
    this._openPopupWithConfirmation = openPopupWithConfirmation;
    this._setLike = setLike;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._template = this._getTemplate();
    this._cardImage = this._template.querySelector(".element__image");
    this._cardTitle = this._template.querySelector(".element__title");
    this._likeCounter = this._template.querySelector(".element__like-counter");
    this._elementDeleteBtn = this._template.querySelector(
      ".element__delete-btn"
    );
    this._elementLikeBtn = this._template.querySelector(".element__like-btn");
  }

  _getTemplate() {
    const cardElement = this._cardTemplate
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  deleteCard() {
    this._template.remove();
    this._template = null;
  }

  _confirmDeleteCard = () => {
    this._openPopupWithConfirmation({ card: this, cardId: this._cardId });
  };

  _handleCardClick = () => {
    this._openPopupImage(this._cardData);
  };

  _handleLikeClick = () => {
    this._setLike(this._elementLikeBtn, this._cardId);
  };

  _setLikeCounter() {
    let idChecked = this._likes.some((item) => item._id === this._myId);
    if (idChecked) {
      this._elementLikeBtn.classList.add("element__like-btn_active");
    }
    this._likeCounter.textContent = this._likes.length;
  }

  toggleLikeBtn(likesArr) {
    this._elementLikeBtn.classList.toggle("element__like-btn_active");
    this._likeCounter.textContent = likesArr.length;
  }

  _setEventListeners() {
    this._elementDeleteBtn.addEventListener("click", () => this._confirmDeleteCard());
    this._elementLikeBtn.addEventListener("click", () => this._handleLikeClick());
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  createCard() {
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    if (this._myId !== this._id) {
      this._elementDeleteBtn.style.display = "none";
    }
    this._setLikeCounter();
    this._setEventListeners();
    return this._template;
  }
}
