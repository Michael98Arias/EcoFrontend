
export interface CategoryCount {
  CATEGORY: number;
}
export class CategorySendModel {
  public name = "";

  toModel() {
    return {
      name: this.name,
    };
  }
}

export interface CategoryList {
  id:        number;
  name:      string;
  state:     string;
  createdAt: Date;
  updatedAt: null;
}

export interface ProductList {
  id:          number;
  category:    Category;
  seller:      Seller;
  name:        string;
  description: string;
  amount:      number;
  price:       number;
  state:       State;
  createdAt:   Date;
  updatedAt:   null;
}

export interface Category {
  id:        number;
  name:      string;
  state:     State;
  createdAt: Date;
  updatedAt: null;
}

export enum State {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export interface Seller {
  id:        number;
  fullname:  string;
  username:  string;
  email:     string;
  role:      string;
  state:     State;
  createdAt: Date;
  updatedAt: null;
}


export interface ProductCount {
  PRODUCT: number;
}

export class ProductSendModel {
  public categoryId = 0;
  public sellerId = 0;
  public name = "";
  public description = "";
  public amount = 0;
  public price = 0;

  toModel() {
    return {
      categoryId: this.categoryId,
      sellerId: this.sellerId,
      name: this.name,
      description: this.description,
      amount: this.amount,
      price: this.price
    };
  }
}

export class ItemSendModel {
  public item = "";

  toModel() {
    return {
      item: this.item,
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