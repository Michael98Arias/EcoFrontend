export interface DataReponse {
  token:     string;
  id:        number;
  fullname:  string;
  username:  string;
  email:     string;
  password:  null;
  role:      string;
  state:     string;
  createdAt: Date;
  errorMessage: string;
}

export class UserSendModelLogin {
  public username = "";
  public password = "";

  toModel() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}

export class UserSendModelRegister {
  public fullname = "";
  public username = "";
  public email = "";
  public password = "";
  public role = "";

  toModel() {
    return {
      fullname: this.fullname,
      username: this.username,
      email: this.email,
      password: this.password,
      rolerole: this.role
    };
  }
}
