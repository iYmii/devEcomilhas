import express, { response } from 'express';
import multer from 'multer';
import uploadConfig from './config/uploadConfig';

import SellersController from './controllers/sellesrController';
import ProductsController from './controllers/productsController';

const sellersController = new SellersController();
const productsController = new ProductsController();

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/sellers', sellersController.index);
routes.post('/sellers', upload.single('logo'), sellersController.store);
routes.get('/products', productsController.index);
routes.post('/products', upload.single('image'), productsController.store);

export default routes;