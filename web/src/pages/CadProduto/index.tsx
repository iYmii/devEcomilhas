import React, { useState, ChangeEvent, useMemo, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

const CadProduto = () => {
    const [formData, setFormData] = useState({ title: '', description: '', price: '', email: '' });
    const [image, setImage] = useState<File>();
    const history = useHistory();
  
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }  

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files

        if(file)
            setImage(file[0]);
    }

    const preview = useMemo(() => {
        return image? URL.createObjectURL(image) : null;
    }, [image])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        if(!image) {
            alert('selecione uma imagem');
            return;
        }

        const data =  new FormData();        
        const blob = image as Blob;

        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('email', formData.email);
        data.append('image', blob);

        const res = await api.post('products', data);        
        history.push('/');
    }

    return (     
        <div className="container">  
            <div className="content"> 
                <Link to="/"> voltar </Link>
                <h2>Cadastrar produto</h2> <br />              

                <form onSubmit={handleSubmit}>  
                    <label htmlFor="email">E-mail </label>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="Seu e-mail"
                        onChange={handleInputChange}
                        required
                    />     

                    <label htmlFor="text">Título </label>
                    <input 
                        type="text" 
                        name="title"
                        id="title"
                        placeholder="Título do produto"
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="text">Descrição </label>
                    <input 
                        type="text" 
                        name="description"
                        id="description"
                        placeholder="Descreva o produto"
                        onChange={handleInputChange}
                        required
                    />
                    
                    <label htmlFor="number">Preço </label>
                    <input 
                        type="number" 
                        name="price"
                        id="price"
                        placeholder="00.00"
                        onChange={handleInputChange}
                        required
                    />

                    <label id="logo" style={{ backgroundImage: `url(${preview})` }}>
                        Imagem
                        <input 
                            type="file" 
                            onChange={handleFileChange}                            
                        />                    
                    </label>

                    <button className="btn" type="submit">
                        Cadastrar produto
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default CadProduto;