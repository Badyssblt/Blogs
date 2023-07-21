import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Log from '../component/Log'
import Register from '../component/Register';

const Profile = () => {

    const [signUpModal, setSignUpModal] = useState(true)
    const [signInModal, setSignInModal] = useState(false)

    const handleModals = (e) => {
        if(e.target.id === 'register') {
            setSignUpModal(true)
            setSignInModal(false)
        }else if(e.target.id === 'login'){
            setSignUpModal(false)
            setSignInModal(true)
        }
    }

    return (
        <div className='profil-page'>
            <Navbar/>
            <div className="log-container">
            <div className='sideForm'>
                <h1 className='titleSideForm'>Bon retour !</h1>
                <div className='registerDiv'>
                 <a onClick={handleModals} id='register'className='registerbtn'>S'inscrire</a>
                 <a onClick={handleModals} id='login'className='registerbtn'>Se connecter</a>
            </div>
            </div>
            </div>
            <div>
            {signUpModal && <Register/>}
            {signInModal && <Log/>}
            </div>
            
        </div>
    );
};

export default Profile;