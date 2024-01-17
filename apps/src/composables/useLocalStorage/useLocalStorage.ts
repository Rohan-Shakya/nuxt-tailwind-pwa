export const useLocalStorage = () => {
  const getItemFromLocalStorage = (key: string) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  };

  const setItemInLocalStorage = (key: string, item: any) => {
    return localStorage.setItem(key, JSON.stringify(item));
  };

  const removeItemFromLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
  };

  return {
    getItemFromLocalStorage,
    setItemInLocalStorage,
    removeItemFromLocalStorage,
  };
};
