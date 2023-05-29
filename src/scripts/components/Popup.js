export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector(".popup__close-btn");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._content = document.querySelector('.content');
  }

  open() {
    this._popup.classList.add("popup_opened");
    this._content.classList.add("content_inactive");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    this._content.classList.remove("content_inactive");
    document.removeEventListener("keydown", this._handleEscClose);
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
