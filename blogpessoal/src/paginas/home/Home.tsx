import React from 'react';
import './Home.css';


function Home(){
    return(

    <form>
        <h1>Preencha o formulário</h1>
    <label>
    Nome:
    <input type="text" name="name" />
    </label>
    <input type="submit" value="Enviar" />
    <br />
    <label className='a'>
    Email:
    <input type="text" name="email" />
    </label>
    <input type="submit" value="Enviar" />
    <br />
    <label>
    Senha:
    <input type="text" name="senha" />
    </label>
    <input type="submit" value="Enviar" />
    </form>

    

    );
}

export default Home;