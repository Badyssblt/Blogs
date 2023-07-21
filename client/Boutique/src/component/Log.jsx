import React from 'react';
import '../styles/Log.css'
const Log = () => {
    return (
        <div className='mainForm'>
            <div className='sideForm'>
                <h1 className='titleSideForm'>Bon retour !</h1>
            </div>
            <div className='contentForm'>
                <h1 className='titleForm'>Se connecter</h1>
                <form className='form'>
                    <input type="email" name="" placeholder='Email' className='btn'/>
                    <input type="password" name="" placeholder='Mot de passe' className='btn'/>
                </form>
            </div>
        </div>
    );
};

export default Log;