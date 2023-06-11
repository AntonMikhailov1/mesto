export default class UserInfo {
  constructor(userSelectors) {
    this._userName = document.querySelector(userSelectors.userNameSelector);
    this._userDescription = document.querySelector(userSelectors.userDescriptionSelector);
    this._userAvatar = document.querySelector(userSelectors.userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userDescription.textContent,
    };
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userDescription.textContent = userData.about;
    this._userAvatar.src = userData.avatar;
  }
}
