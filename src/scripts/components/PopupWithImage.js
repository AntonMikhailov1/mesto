import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  #popupImage;
  #popupImageCaption;

  constructor(popupSelector) {
    super(popupSelector);
    this.#popupImage = this.popup.querySelector(".popup__image");
    this.#popupImageCaption = this.popup.querySelector(".popup__image-caption");
  }

  open = (cardData) => {
    console.log(cardData);
    this.#popupImage.src = cardData.link;
    this.#popupImage.alt = cardData.name;
    this.#popupImageCaption.textContent = cardData.name;
    super.open();
  };
}
