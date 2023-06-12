export default class Popup {
  #closeBtn;
  #content;

  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this.#closeBtn = this.popup.querySelector(".popup__close-btn");
    this.#content = document.querySelector('.content');
  }

  open() {
    this.popup.classList.add("popup_opened");
    this.#content.classList.add("content_inactive");
    document.addEventListener("keydown", this.#handleEscClose);
  }

  close() {
    this.popup.classList.remove("popup_opened");
    this.#content.classList.remove("content_inactive");
    document.removeEventListener("keydown", this.#handleEscClose);
  }

  #handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.#closeBtn.addEventListener("click", () => this.close());
    this.popup.addEventListener("pointerdown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
