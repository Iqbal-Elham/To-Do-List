const getLocalStorage = (ele) => {
  let element = localStorage.getItem(ele);
  if (element) {
    element = JSON.parse(element);
    return element;
  }
  return [];
};

export default getLocalStorage;