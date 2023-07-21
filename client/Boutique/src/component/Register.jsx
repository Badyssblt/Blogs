import React from 'react';

const Register = () => {
    return (
        <div className='mainForm'>
            <div className='contentForm'>
                <h1 className='titleForm'>S'inscrire</h1>
                <h1 className='btn'>Se connecter</h1>
                <form className='form'>
                    <input type="email" name="" placeholder='Email' className='btn'/>
                    <input type="password" name="" placeholder='Mot de passe' className='btn'/>
                    <button type="submit" className='btn'>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Register;