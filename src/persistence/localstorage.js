/**
 * Persiste the application state.
 */
const saveState = state => localStorage.setItem('tree', JSON.stringify(state));


/**
 * Load the application state.
 */
const loadState = () => (
  JSON.parse(localStorage.getItem('tree')) || undefined 
);

module.exports = { saveState, loadState };