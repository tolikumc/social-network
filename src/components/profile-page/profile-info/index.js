import React from 'react';
import './index.css'


export const ProfileInfo = (props) => {
    return (
        <div>
            <div className='p-image'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGysKVUdBy-weSBaMtRQIAcEF1HFtav6oDzsW04qoH2EtnGWnSg"
                    alt=""/>
            </div>
            <div className='p-info'>
                ava + desc
            </div>
        </div>
    )
};
