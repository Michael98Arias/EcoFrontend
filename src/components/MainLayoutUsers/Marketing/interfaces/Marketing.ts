
export interface ChannelCount {
  CHANNEL: number;
}
export class ChannelSendModel {
  public name = "";

  toModel() {
    return {
      name: this.name,
    };
  }
}

export interface ChannelList {
  id:        number;
  name:      string;
  state:     string;
  createdAt: Date;
  updatedAt: null;
}

export interface CampaignList {
  id:          number;
  channel:    Channel;
  seller:      Seller;
  name:        string;
  description: string;
  amount:      number;
  price:       number;
  state:       State;
  createdAt:   Date;
  updatedAt:   null;
}

export interface Channel {
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


export interface CampaignCount {
  CAMPAIGN: number;
}

export class CampaignSendModel {
  public channelId = 0;
  public sellerId = 0;
  public name = "";
  public description = "";
  public amount = 0;
  public price = 0;

  toModel() {
    return {
      channelId: this.channelId,
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