import express from 'express'; 
import mongoose from 'mongoose'
import cors from 'cors';

import routes from './routes';

const app = express();
const bd = ""; // --!---!---!- colocar gui:0rI1H5wLwoXusy3S  ---!---!----!--

mongoose.connect(`mongodb+srv://${bd}@cluster0-8coeh.mongodb.net/ecomilhas?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

console.log("rodando!")
app.listen(process.env.PORT || 570900);

