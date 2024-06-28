import React from 'react';
import expertsData from './data';
import Expert from './Expert';

const Experts1 = () => {
    return (
        <div>
            <ul>
                {expertsData.map((expert) => (
                    <Expert expert={expert} key={expert.id}/>
                ))}
            </ul>
        </div>
    );
}

export default Experts1;
