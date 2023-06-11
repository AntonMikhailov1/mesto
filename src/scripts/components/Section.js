export default class Section {
  constructor(renderer, containerSelector) {
    this.renderer = renderer;
    this.cardContainer = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element) {
    this.cardContainer.append(element);
  }
}
