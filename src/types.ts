export type ProductType = {
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    productSalePrice: number;
    productStock: number;
};

export type MenuType = {
    menuItem: string;
    menuLink: string;

};

export type CartType = {
    productQty: number;
  } & ProductType;

  export type StoreType = {
      currency: string;
      cart: CartType[];
      userSession: UserSessionType;
  }; 

  export type LoginResponseType = {
    message: string;
    access_token: string;
  };

  export type UserSessionType = {
      user: object | null;
      error: string | null;
  }

  export type UserType = {
      userName: string;
      userEmail: string;
      userContact: number;
  }

  export type RegisterResponseType = {
      name: string;
      email: string;
      contact: number;
      password: string;
  }

  export type OrderResponseType = {
      orderName: string;
      orderAmount: number;
      productId: number;
  }

  export type AddressType = {
      aptNo: string;
      aptName: string;
      street: string;
      locality: string;
      city: string;
      state: string;
      pincode: number;
  }