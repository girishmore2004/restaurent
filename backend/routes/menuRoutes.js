const express = require('express');
const menuItemsRouter = express.Router();

const menuItems = [
    { id: 1, name: 'Pizza', price: 150 },
    { id: 2, name: 'Burger', price: 120 },
    { id: 3, name: 'Sandwich', price: 100 },
    { id: 4, name: 'Salad', price: 80 },
    { id: 5, name: 'Fries', price: 60 },
    { id: 6, name: 'Soda', price: 40 },
    { id: 7, name: 'Water', price: 20 },
    { id: 8, name: 'Chicken Wings', price: 180 },
    { id: 9, name: 'Onion Rings', price: 140 },
    { id: 10, name: 'Desserts', price: 200 },
    { id: 11, name: 'Cheese Paratha', price: 250 },
    { id: 12, name: 'Aloo Paratha', price: 200 },
    { id: 13, name: 'Egg Paratha', price: 150 },
    { id: 14, name: 'Palak Paneer', price: 400 },
    { id: 15, name: 'Daal Chawal', price: 400 },
    { id: 16, name: 'Aloo Ghobi', price: 200 },
    { id: 17, name: 'Aloo Goshat', price: 200 },
    { id: 18, name: 'Mango Shakes', price: 150 },
    { id: 19, name: 'Banana Shakes', price: 150 },
    { id: 20, name: 'Biryani', price: 600 },
    { id: 21, name: 'Korma', price: 250 },
    { id: 22, name: 'Grilled Salmon', price: 250 },
    { id: 23, name: 'Beef Wellington', price: 350 },
    { id: 24, name: 'Paneer Butter Masala', price: 500 },
    { id: 25, name: 'Vegetable Biryani', price: 400 },
     
];

menuItemsRouter.get('/', (req, res) => {
  res.json({ menuItems: menuItems });
});

module.exports = menuItemsRouter;