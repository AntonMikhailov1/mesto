export default class Api {
  #url;
  #headers;
  #token;

  constructor(options) {
    this.#url = options.baseUrl;
    this.#headers = options.headers;
    this.#token = options.headers.authorization;
  }

  #checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.#url}/cards`, {
      headers: {
        authorization: this.#token,
      },
    }).then((res) => this.#checkResponse(res));
  }

  getProfileInfo() {
    return fetch(`${this.#url}/users/me`, {
      headers: {
        authorization: this.#token,
      },
    }).then((res) => this.#checkResponse(res));
  }

  setProfileInfo(userData) {
    return fetch(`${this.#url}/users/me`, {
      method: "PATCH",
      headers: this.#headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((res) => this.#checkResponse(res));
  }

  setAvatar(userData) {
    return fetch(`${this.#url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.#headers,
      body: JSON.stringify({
        avatar: userData.avatar,
      }),
    }).then((res) => this.#checkResponse(res));
  }

  addCard(cardData) {
    return fetch(`${this.#url}/cards`, {
      method: "POST",
      headers: this.#headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    }).then((res) => this.#checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.#url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.#token,
      },
    }).then((res) => this.#checkResponse(res));
  }

  addCardLike(cardId) {
    return fetch(`${this.#url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this.#token,
      },
    }).then((res) => this.#checkResponse(res));
  }

  deleteCardLike(cardId) {
    return fetch(`${this.#url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this.#token,
      },
    }).then((res) => this.#checkResponse(res));
  }
}
