import React, { useEffect, useState } from 'react';
import Expert from './Expert';
import axios from 'axios';

const Experts2 = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/experts2')
            .then((res) => {  setExperts(res.data) })
    }, [])
    return (
        <div>
            <ul>
                {experts.map((expert) => (
                    <Expert expert={expert} key={expert.id} />
                ))}
            </ul>
        </div>
    );
}

export default Experts2;
