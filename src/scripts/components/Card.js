export default class Card {
  #myId;
  #cardData;
  #ownerId;
  #cardId;
  #name;
  #link;
  #likes;
  #openPopupImage;
  #openPopupWithConfirmation;
  #setLike;
  #cardTemplate;
  #cardImage;
  #cardTitle;
  #likeCounter;
  #elementDeleteBtn;
  #elementLikeBtn;
  #template;
  
  constructor(
    myId,
    cardData,
    cardTemplateSelector,
    openPopupImage,
    openPopupWithConfirmation,
    setLike) {
    this.#myId = myId;
    this.#cardData = cardData;
    this.#ownerId = cardData.owner._id;
    this.#cardId = cardData._id;
    this.#name = cardData.name;
    this.#link = cardData.link;
    this.#likes = cardData.likes;
    this.#openPopupImage = openPopupImage;
    this.#openPopupWithConfirmation = openPopupWithConfirmation;
    this.#setLike = setLike;
    this.#cardTemplate = document.querySelector(cardTemplateSelector).content;
    this.#template = this.#getTemplate();
    this.#cardImage = this.#template.querySelector(".element__image");
    this.#cardTitle = this.#template.querySelector(".element__title");
    this.#likeCounter = this.#template.querySelector(".element__like-counter");
    this.#elementDeleteBtn = this.#template.querySelector(".element__delete-btn");
    this.#elementLikeBtn = this.#template.querySelector(".element__like-btn");
  }

  #getTemplate() {
    const cardElement = this.#cardTemplate
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  deleteCard() {
    this.#template.remove();
    this.#template = null;
  }

  #confirmDeleteCard = () => {
    this.#openPopupWithConfirmation({ card: this, cardId: this.#cardId });
  };

  #handleCardClick = () => {
    this.#openPopupImage(this.#cardData);
  };

  #handleLikeClick = () => {
    this.#setLike(this.#elementLikeBtn, this.#cardId);
  };

  #setLikeCounter() {
    let idChecked = this.#likes.some((item) => item._id === this.#myId);
    if (idChecked) {
      this.#elementLikeBtn.classList.add("element__like-btn_active");
    }
    this.#likeCounter.textContent = this.#likes.length;
  }

  toggleLikeBtn(likesArr) {
    this.#elementLikeBtn.classList.toggle("element__like-btn_active");
    this.#likeCounter.textContent = likesArr.length;
  }

  #setEventListeners() {
    this.#elementDeleteBtn.addEventListener("click", () => this.#confirmDeleteCard());
    this.#elementLikeBtn.addEventListener("click", () => this.#handleLikeClick());
    this.#cardImage.addEventListener("click", () => this.#handleCardClick());
  }

  createCard() {
    this.#cardImage.src = this.#link;
    this.#cardTitle.textContent = this.#name;
    this.#cardImage.alt = this.#name;
    if (this.#myId !== this.#ownerId) {
      this.#elementDeleteBtn.style.display = "none";
    }
    this.#setLikeCounter();
    this.#setEventListeners();
    return this.#template;
  }
}
