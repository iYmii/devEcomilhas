import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="btnGroup">
                    <Link to="/cadVendedor"> 
                        <button className="btn" type="submit">
                            Cadastrar Vendedor
                        </button>
                    </Link>

                    <Link to="/cadProduto"> 
                        <button className="btn" type="submit">                        
                            Cadastrar produto                        
                        </button>
                    </Link> 
                </div>                
            </div>
        </div>
    )
}

export default Home;
