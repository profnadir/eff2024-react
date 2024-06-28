import React from 'react';
import Evenements from './Evenements';

const Expert = ({expert}) => {
    return (
        <div>
            <li>
                {expert.nom_complet}
                <Evenements evenements={expert.événements}/>
            </li>
        </div>
    );
}

export default Expert;
