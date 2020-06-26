import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({    
    image: String,
    title: String,
    description: String,
    price: Number,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    }
});

export default mongoose.model('Product', ProductSchema);


