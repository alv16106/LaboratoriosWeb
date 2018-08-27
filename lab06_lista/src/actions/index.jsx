export const addItem = (newItem) => ({
  type: 'ITEM_ADDED',
  payload: newItem,
});

export const buyItem = (name, price) => ({
  type: 'ITEM_BOUGHT',
  payload: {name: name, price: price},
});

export const sellItem = (id) => ({
  type: 'ITEM_SOLD',
  payload: id,
});

export const changeTotal = (tot) => ({
  type: 'TOTAL_CHANGED',
  payload: tot,
});