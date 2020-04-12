import { ProductInterface } from './types';

export const products: ProductInterface[] = [
  {
    id: 1,
    name: 'Google Pixel 4 XL', // Phone XL
    price: 799,
    available: true,
    description: 'A large phone with awesome sepcs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WSREYmFYPNXNK8irBTr3M_AgkV3HpgxiWzebSyk3_d6vydhE&s'
    //image: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4-r1.jpg'
  },
  {
    id: 2,
    name: 'Sony Xperia XZ1 Compact', // Phone Mini
    price: 699,
    available: false,
    description: 'A great phone for people with small pockets',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz1-compact.jpg'
  },
  {
    id: 3,
    name: 'Apple iPhone 7', // Phone Standard
    price: 299,
    available: true,
    description: '',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg'
  },
  {
    id: 4,
    name: 'Samsung Galaxy Tab E', // Tablet XL
    price: 1799,
    available: true,
    description: 'A large tablet with one of the best screens',
    image: 'https://cdn-files.kimovil.com/phone_front/0001/39/thumb_38972_phone_front_big.jpeg'
    //image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-12-2020.jpg'
  },
  {
    id: 5,
    name: 'Apple iPad Air 2', // Tablet Slim
    price: 1699,
    available: true,
    description: 'A slim, lightweight tablet to carry around everywhere you go',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air-2-new.jpg'
  },
  {
    id: 6,
    name: 'Samsung Galaxy Tab A', // Tablet Cheap
    price: 1299,
    available: true,
    description: 'A cheap tablet to get you, or your kids, started',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-a-70-2016-.jpg'
  }
];
