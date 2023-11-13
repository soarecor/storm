export async function getProducts(query) {
  if (query) {
    const filteredProducts = products.filter((product) =>
      product.searchString.includes(query.toLowerCase())
    );
    return filteredProducts;
  }
  return products;
}

const products = [
  {
    product: "Macbook Pro 16 inch (2020 ) For Sale",
    serial: "BA9212320",
    id: 1374,
    quantity: 122,
    total: 854.08,
    status: "brand new",
  },
  {
    product: "Gaming Chair, local pickup only",
    serial: "BA9212320",
    id: 3933,
    quantity: 245,
    total: 943.65,
    status: "out of stock",
  },
  {
    product: "Macbook Air 13 inch(2020 ) For Sale",
    serial: "KH9212924",
    id: 9374,
    quantity: 134,
    total: 779.58,
    status: "refurbished",
  },
  {
    product: "Heimer Miller Sofa (Mint Condition)",
    serial: "SD9212969",
    id: 5560,
    quantity: 26,
    total: 275.43,
    status: "refurbished",
  },
  {
    product: "iPad Pro 2017 Model",
    serial: "012921097",
    id: 6065,
    quantity: 76,
    total: 475.22,
    status: "out of stock",
  },
  {
    product: "Gopro hero 7 (with receipt)",
    serial: "BA9212320",
    id: 4349,
    quantity: 47,
    total: 219.78,
    status: "brand new",
  },
  {
    product: "Dell Computer Monitor",
    serial: "SD9212969",
    id: 9359,
    quantity: 54,
    total: 105.55,
    status: "out of stock",
  },
  {
    product: "AirPods Pro",
    serial: "SD9212969",
    id: 8829,
    quantity: 132,
    total: 928.41,
    status: "out of stock",
  },
  {
    product: "Playstation 4 Limited Edition",
    serial: "SD9212969",
    id: 5045,
    quantity: 15,
    total: 473.85,
    status: "brand new",
  },
  {
    product: "DJI Mavic Pro 2",
    serial: "SD9212969",
    id: 3536,
    quantity: 39,
    total: 576.28,
    status: "refurbished",
  },
].map((product) => {
  return {
    // this search string will be used to filter for a substring that matches
    // 1. the regex replace removes all spaces
    // 2. toLowerCase makes all characters lower case
    searchString: product.product.replace(/ /g, "").toLowerCase(),
    ...product,
  };
});
