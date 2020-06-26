import mongoose from 'mongoose';

const SellerSchema = new mongoose.Schema({    
    name: String,
    email: String,
    logo: String
});

export default mongoose.model('Seller', SellerSchema);


