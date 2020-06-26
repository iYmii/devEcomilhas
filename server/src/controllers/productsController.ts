import { Request, Response } from 'express';
import Product from '../models/Product';
import Seller from '../models/Seller';

class productsController {
    async index(req: Request, res: Response) {                         
        const { email } = req.query;

        const seller = await Seller.findOne({ email });        
        
        if(!seller) return res.status(400).json({ message: 'vendedor não encontrado' });

        const products = await Product.find({ seller: seller?._id });
        res.json(products);
    }

    async store(req: Request, res: Response) {                         
        const { filename } = req.file;          
        const { title, description, price, email } = req.body;                   
        
        const seller = await Seller.findOne({ email });        
        if(!seller) return res.status(400).json({ message: 'Vendedor não encontrado' })
        
        let product = await Product.findOne({ title }).where('seller', seller.id);
        if(product) return res.status(400).json({ message: 'você já cadastrou um produto com esse título' });        

        product = await Product.create({ 
            image: filename, 
            title, 
            description, 
            price,
            seller: seller.id
         });

        return res.json(product);
    }    

    async remove(req: Request, res: Response) {  
    
    }
}

export default productsController;