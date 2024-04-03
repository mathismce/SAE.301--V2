import React, { useState } from 'react';
import { login} from '../lib/loaders';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userData = await login(username, password);
            console.log('User data:', userData);
            // Rediriger l'utilisateur vers une autre page ou effectuer d'autres actions après la connexion réussie
        } catch (error) {
            console.error('Login failed:', error.message);
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <section className='flex justify-center'>
                <form onSubmit={handleLogin} className="flex flex-col gap-2 w-52 justify-center ">
                    <input
                        type="text"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </section>
        </>
    );
}
