import { Request, Response } from 'express';
import Seller from '../models/Seller';

class SellersController {
    async index(req: Request, res: Response) {            
        const sellers = await Seller.find();
        
        res.json(sellers);
    }

    async store(req: Request, res: Response) {    
        const { filename } = req.file;  
        const { name, email } = req.body;        
        
        let seller = await Seller.findOne({ email });
        
        if(seller) 
            return res.status(400).json({ message: 'Email já cadastrado'});
        
        seller = await Seller.create({ name, email, logo: filename });

        return res.json(seller);              
    }
} 

export default SellersController;

