import React, { useState } from 'react';
import axios from 'axios';

const CreerEmploye = () => {

    const [newUser, setNewUser] = useState(getDefaultUser());

    function getDefaultUser() {
        return {
            email: "default@user",
            password: "azerty",
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewUser({
            ...newUser,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createEmploye", newUser /*{email, password}*/)
            .then(result => console.log(result))
            .catch(err => console.log(err))
        setNewUser(getDefaultUser());
    }

    return (
        <form className="elementDashboardAdmin" onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={newUser.email}
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleInputChange}
                value={newUser.password}
                required
            />

            <button type="submit">Créer</button>
        </form>
    );
};

export default CreerEmploye;