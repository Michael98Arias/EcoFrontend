export interface RoleCount {
  CUSTOMER: number;
  ADMIN: number;
  SELLER: number;
}

export interface ListUserByRole {
  id: number;
  fullname: string;
  username: string;
  email: string;
  role: string;
  state: string;
  createdAt: Date;
  updatedAt: null;
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

export class RoleSendModel {
  public role = "";

  toModel() {
    return {
      role: this.role,
    };
  }
}
export class StatusSendModel {
  public id = 0;
  public status = '';

  toModel() {
    return {
      id: this.id,
      status: this.status,
    };
  }
}