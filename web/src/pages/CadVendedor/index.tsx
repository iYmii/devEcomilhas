import React, { useState, ChangeEvent, useMemo, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

const CadVendedor = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [logo, setLogo] = useState<File>();
    const history = useHistory();
  
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value});
    }  

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files;

        if(file)
            setLogo(file[0]);
    }

    const preview = useMemo(() => {
        return logo? URL.createObjectURL(logo) : null;
    }, [logo])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(!logo) {
            alert('selecione uma imagem');
            return;
        }

        const data =  new FormData();
        const blob = logo as Blob;

        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('logo', blob);

        const res = await api.post('sellers', data);   
        history.push('/');
    }

    return (     
        <div className="container">  
            <div className="content"> 
                <Link to="/"> voltar </Link>
                <h2>Cadastrar vendedor</h2>              

                <form onSubmit={handleSubmit}>                    
                    <label htmlFor="email">Nome </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="Seu nome"
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">E-mail </label>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        onChange={handleInputChange}
                        required
                    />

                    <label id="logo" style={{ backgroundImage: `url(${preview})` }}>
                        Logo
                        <input 
                            type="file" 
                            onChange={handleFileChange}                            
                        />                    
                    </label>

                    <button className="btn" type="submit">
                        Cadastrar vendedor
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default CadVendedor;