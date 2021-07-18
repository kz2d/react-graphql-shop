export const createID = (item) => {
  return item.name + JSON.stringify(item.attributes);
};
