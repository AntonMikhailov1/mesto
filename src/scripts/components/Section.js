export default class Section {
  #cardContainer;

  constructor(renderer, containerSelector) {
    this.renderer = renderer;
    this.#cardContainer = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.renderer(item);
    });
  }

  appendItem(element) {
    this.#cardContainer.append(element);
  }

  prependItem(element) {
    this.#cardContainer.prepend(element);
  }
}
