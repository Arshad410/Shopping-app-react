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