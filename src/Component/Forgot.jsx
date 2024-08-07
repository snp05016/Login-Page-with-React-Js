import React, { useState } from 'react';

function Forgot() {
    const [formData, setFormData] = useState({
        password: '',
        rePassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, rePassword } = formData;

        if (password !== rePassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        // Handle successful form submission (e.g., send data to the server)
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='forgot'>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <h3 className="createh3">Password</h3>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <h3 className="createh3">Re-enter Password</h3>
                    <input
                        type="password"
                        name="rePassword"
                        placeholder="Re-enter Password"
                        value={formData.rePassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Forgot;
