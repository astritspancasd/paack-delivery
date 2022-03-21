export const addItemToLocalStorage = (name: string, value: string) => {
  window.localStorage.setItem(name, value);
};

export const getItemFromLocalStorage = (name: string): string => {
  return window.localStorage.getItem(name) || '';
};

export const removeItemFromLocalStorage = (name: string) => {
  window.localStorage.removeItem(name);
};
