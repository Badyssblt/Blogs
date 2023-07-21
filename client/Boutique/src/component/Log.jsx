import React, { useState } from 'react';
import '../styles/Log.css'
const Log = () => {

    return (
            <div className='contentForm'>
                <h1 className='titleForm'>Se connecter</h1>
                <form className='form'>
                    <input type="email" name="" placeholder='Email' className='btn'/>
                    <input type="password" name="" placeholder='Mot de passe' className='btn'/>
                    <button type="submit" className='btn'>Se connecter</button>
                </form>
            </div>
    );
};

export default Log;