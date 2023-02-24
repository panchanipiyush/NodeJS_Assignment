// use shoppingdb



db.createCollection('users')
db.createCollection('products')
db.users.insertOne({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'mysecretpassword',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  });
  db.products.insertOne({
    name: 'iPhone 13',
    description: 'The latest iPhone model',
    price: 999,
    quantity: 10,
    categories: ['Electronics', 'Phones']
  });
    