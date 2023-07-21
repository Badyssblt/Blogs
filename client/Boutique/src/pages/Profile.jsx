import React from 'react';
import Navbar from '../component/Navbar';
import Log from '../component/Log'

const Profile = () => {
    return (
        <div className='profil-page'>
            <Navbar/>
            <div className="log-container">
                <Log/>
            </div>
            
        </div>
    );
};

export default Profile;