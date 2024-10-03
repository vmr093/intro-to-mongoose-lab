const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const Customer = require('./student');
dotenv.config(); 

let gameOver = false;
const customers = [
  {
  id: '658226acdcbecfe9b99d5421',
  name: 'Bilbo', 
  age: 50,
  },
  {
  id: '65825d1ead6cd90c5c430e24',
  name: 'Vivienne', 
  age: 6,
  }
];

while (gameOver === false) {
  const choice = prompt(`What would you like to do?

    1. Create a customer
    2. View all customers
    3. Update a customer
    4. Delete a customer
    5. quit`)

    if (choice === '1') {
      const username = prompt('Enter your name:');
      const age = prompt ('Enter your age:');
      customers.push({username, age});
    }
    if (choice === '2') {
      prompt(customers);
    }
    if (choice === '3') {
      const updateCustomer = prompt('Insert customer Id to update: ');
      const customer = customers.find(i => i.id === updateCustomer);
      if (customer) {
        customer.name = prompt('What is the customer new name?');
        customer.age = Number(prompt('What is the customers new age?'));
      } else {
        console.log('Customer not found.')
      }
    }
    if (choice === '4') {
      const deleteCustomer = prompt('Insert the customer Id to delete: ');
      const index = customers.findIndex(i => i.id === deleteCustomer);
      if (index !== -1) {
        customers.splice(index, 1);
        console.log('Customer deleted');
      }else {
        console.log('Customer not found')
      }
    }
    if (choice === '5') {
      gameOver = true;
      //mongoose.connection.close()
    }
}