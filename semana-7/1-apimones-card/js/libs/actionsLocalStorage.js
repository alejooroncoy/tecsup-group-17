/**
 * 
 * @param {"get" | "set"} action 
 * @param {String} name 
 * @param {*} data 
 * @returns 
 */
export default function actionsLocalStorage(action, key, data = '') {
  const actions = {
    get() {
      const parsedActions = {
        'false': false,
        'true': true,
      }
      const value = localStorage.getItem(key);
      return parsedActions[value] || value;
    },
    set() {
      const isValid = typeof data === 'string' || typeof data === 'boolean' || typeof data === 'number';
      if(isValid) {
        localStorage.setItem(key, data);
      }else {
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
      }
    }
  };
  return actions[action]();
}