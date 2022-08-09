const mongoose = require('mongoose')

// Models
const Client = require('../models/client')

// Add data to 
exports.add = async (req, res, next) => {
    try {

        await new Client({
            _id: mongoose.Types.ObjectId(),
            code: req.body.code,
            name: req.body.name,
            gender: req.body.gender,
            address: req.body.address,
            city: req.body.city,
            pincode: req.body.pincode,
            state: req.body.state,
            gstNumber:req.body.gstNumber,
            panNumber: req.body.panNumber,
            bankAccountnumber: req.body.bankAccountnumber,
            ifscCode: req.body.ifscCode,
            bankCode:req.body.bankCode,
            bankName:req.body.bankName,
            bankAddress:req.body.bankAddress,

        }).save()

        res.json({
            result: 'success'
        })

    } catch (err) {
        next(err)
    }
}

exports.delete = async (req, res, next) =>{
    try {

        await Client.deleteOne({ _id: req.params.clientId})

        res.json({
            result: 'success'
        })

    }catch{
        next(err)
    }
}

exports.get = async (req,res,next) =>{
    try{
       let clients = await Client.findById({ _id: req.params.clientId})
        res.json({
            result: 'success',  
            clients: clients
        })
    }catch{
        next(err)
    }
}