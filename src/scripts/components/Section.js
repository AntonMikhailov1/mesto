export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this.renderer = renderer;
    this.cardContainer = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this.addItem(this.renderer(item));
    });
  }

  addItem(element) {
    this.cardContainer.append(element);
  }
}
