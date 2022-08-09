const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Controllers
const clientsControllers = require('../controllers/clients');


//Handle incoming GET request to /orders
router.get(
     '/:clientId',
     clientsControllers.get
     );

router.post(
    '/',
    clientsControllers.add
)

router.delete('/:clientId',
             clientsControllers.delete
             )
                 
module.exports = router;
