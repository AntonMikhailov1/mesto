export default class UserInfo {
  constructor(userSelectors) {
    this._userName = document.querySelector(userSelectors.userNameSelector);
    console.log("this._userName: ", this._userName);

    this._userDescription = document.querySelector(
      userSelectors.userDescriptionSelector
    );
    console.log("this._userDescription: ", this._userDescription);
  }

  getUserInfo() {
    return {
      username: this._userName.textContent,
      description: this._userDescription.textContent,
    };
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.username;
    this._userDescription.textContent = userData.description;
  }
}
