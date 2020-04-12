
export interface MessageInterface {
  msgTimestamp: number,
  msgHtml: string,
  msgType: 'success' | 'warning' | 'error',
  msgIconText: string,
  msgActive: boolean
};

export interface ProductInterface {
  id: number,
  name: string,
  price: number,
  available: boolean,
  description: string,
  image: string
};

export interface CartPricesInterface {
  subtotal: number,
  shipping: number | 'TBD',
  tax: number | 'TBD',
  total: number
};

export interface CustomerDataInterface {
  name: string,
  address: string,
  shippingOption: string,
  items: ProductInterface[],
  prices: CartPricesInterface
};

export interface ShippingOptionInterface {
  type: string,
  price: number
};
