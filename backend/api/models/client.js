const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: { type:  String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    address: {type:String , requires: true},
    city: {type:String , required: true},
    pincode: {type:String , required: true},
    state: { type: String , required:true},
    gstNumber:{type:String,required:true},
    panNumber: {type:String , required : true},
    bankAccountnumber: {type:String , required: true },
    ifscCode: {type:String,required:true},
    bankCode: {type:String , required: true},
    bankName: {type:String,required:true},
    bankAddress:{type:String,required:true}
});

module.exports = mongoose.model('client', clientSchema);