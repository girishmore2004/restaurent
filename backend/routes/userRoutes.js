const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Order =require('../models/Order');
// const Menu =require('../models/Menu');
const Reservation=require('../models/Reservation')
const router = express.Router();


// router.get('/getUserName', async (req, res) => {
//   try {
//     const userName = await User.findOne({}, 'name');
//     res.status(200).json({ userName });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
router.get('/getUserName', async (req, res) => {
  try {
    const user = await User.findOne({}, 'name');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ userName: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 
// Place order
router.post('/order', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/order/:foodName/:price', (req, res) => {
  const { foodName, price } = req.params;

  // For demonstration purposes, we just return the received parameters.
  // You can add logic to handle orders, like saving to a database.
  res.json({
      foodName: decodeURIComponent(foodName),
      price: decodeURIComponent(price),
  });
});
// Make reservation
router.post('/reservation', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Reservation made successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post(
  '/signup',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('cpassword', 'Confirm password')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, cpassword } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      user = new User({ name, email, password, cpassword });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, 'girish@123', { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, 'girish@123', { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.post(
  '/change-password',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('oldPassword', 'Old password is required').exists(),
    check('newPassword', 'New password must be at least 6 characters long').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, oldPassword, newPassword } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email' });
      }

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);

      await user.save();

      res.status(200).json({ message: 'Password changed successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.post('/subscribe', async (req, res) => {
  try {
      const { email } = req.body;

      // Check if email already exists
      let user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({ msg: 'Email already subscribed' });
      }

      // Create new user
      user = new User({ email });
      await user.save();

      res.status(200).json({ msg: 'Subscribed successfully!' });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
 
 
module.exports = router;
