import { content } from "../utilis/constants.js";
import { enablePointer, disablePointer } from "../utilis/utilis.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector(".popup__close-btn");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    content.classList.add("content_inactive");
    document.addEventListener("keydown", this._handleEscClose);
    enablePointer(this._popup);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    content.classList.remove("content_inactive");
    document.removeEventListener("keydown", this._handleEscClose);
    disablePointer(this._popup);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeBtn.addEventListener("click", () => this.close());
    this._popup.addEventListener("pointerdown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
