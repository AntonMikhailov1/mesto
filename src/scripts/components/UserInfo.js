export default class UserInfo {
  #userName;
  #userDescription;
  #userAvatar;

  constructor(userSelectors) {
    this.#userName = document.querySelector(userSelectors.userNameSelector);
    this.#userDescription = document.querySelector(userSelectors.userDescriptionSelector);
    this.#userAvatar = document.querySelector(userSelectors.userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this.#userName.textContent,
      about: this.#userDescription.textContent,
    };
  }

  setUserInfo(userData) {
    this.myId = userData._id;
    this.#userName.textContent = userData.name;
    this.#userDescription.textContent = userData.about;
    this.#userAvatar.src = userData.avatar;
  }
}
