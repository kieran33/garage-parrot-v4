import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

const ModifierEmploye = () => {
    const [employes, setEmployes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newUser, setNewUser] = useState('');

    /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');*/

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleModif = (e) => {
        e.preventDefault();

        axios.put("http://localhost:3001/updateEmploye", { email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="elementDashboardAdmin" id="supprimerEmploye">
                <h3>Liste des employés</h3>
                <div>
                    {employes.map((employe, index) => (
                        <div index={index} className="employe">
                            <p>email : {employe.email}</p>
                            <p>mot de passe : {employe.password}</p>
                            <p>id : {index + 1}</p>
                            <button onClick={openModal}>Modifier</button>
                        </div>
                    ))}
                    <div>
                        <ReactModal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            className="modalModifierEmploye"
                        >
                            <form className="elementDashboardAdmin" onSubmit={handleModif}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    //onChange={handleInputModif}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={employes.email}
                                    required
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mot de passe"
                                    //onChange={handleInputModif}
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={employes.password}
                                    required
                                />

                                <button /*onClick={handleSubmit}*/ type="submit">Modifier</button>
                                <button onClick={closeModal}>Fermer</button>
                            </form>

                        </ReactModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModifierEmploye;