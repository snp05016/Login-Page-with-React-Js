import React, { useState } from 'react';

const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
    'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
    'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China',
    'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea',
    'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece',
    'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
    'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
    'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
    'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea', 'Kuwait',
    'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia',
    'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
    'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru',
    'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
    'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama',
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
    'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
    'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
    'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
];

const CreateAccountPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        companyName: '',
        postalCode: '',
        gender: '',
        jobRole: '',
        country: '', // Changed to lowercase for consistency
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
        <div className="createaccount">
            <h3 className="createh3">Create an account</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-row">
                    <div className="input-group">
                        <h3 className="createh3">First Name</h3>
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <h3 className="createh3">Last Name</h3>
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
                    </div>
                </div>
                <h3 className="createh3">Email</h3>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className='email1'/>
                <div className="input-row">
                    <div className="input-group">
                        <h3 className="createh3">Password</h3>
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <h3 className="createh3">Re Enter Password</h3>
                        <input type="password" name="rePassword" placeholder="Re Enter Password" value={formData.rePassword} onChange={handleChange} />
                    </div>
                </div>
                <h3 className="createh3">Company Name</h3>
                <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className='company1' />
                <div className='input-row'>
                    <div className="input-group">
                        <h3 className="createh3">Postal Code</h3>
                        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <h3 className="createh3">Country</h3>
                        <select name="country" value={formData.country} onChange={handleChange}>
                            <option value="">Select Country</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-group">
                        <h3 className="createh3">Gender</h3>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <h3 className="createh3">Job Role</h3>
                        <input type="text" name="jobRole" placeholder="Job Role" value={formData.jobRole} onChange={handleChange} />
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <input type="submit" value="Create Account" />
            </form>
            <br /><br />
        </div>
    );
};

export default CreateAccountPage;
