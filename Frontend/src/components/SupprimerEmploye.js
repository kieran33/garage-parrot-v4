import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SupprimerEmploye = () => {

    const [employes, setEmployes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setEmployes(result.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteEmploye/" + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="elementDashboardAdmin" id="supprimerEmploye">
            <h3>Liste des employés</h3>
            <div>
                {employes.map((employe, index) => (
                    <div index={index} className="employe">
                        <p>employé : {employe.email}</p>
                        <p>id : {index + 1}</p>
                        <button onClick={(e) => handleDelete(employe._id)}>Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupprimerEmploye;