// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Function to modify the customerName variable to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer variable in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer with an initial value
const leastFavoriteCustomer = 'someone';

// Function that attempts to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  // This line will throw an error due to attempting to reassign a constant
  leastFavoriteCustomer = 'new person';
}


module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
