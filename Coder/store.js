const Store = {
  buy: (card) => {
    return localStorage.getItem(card);
  },
  
  sell: (receipt, item) => {
    localStorage.setItem(receipt, item);
  },
  
  annihilate: (key) => {
    localStorage.removeItem(key);
  }
};