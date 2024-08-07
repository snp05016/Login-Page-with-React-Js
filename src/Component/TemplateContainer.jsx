import React from 'react';
import starlogo from '../assets/geometric-logo-four-pointed-star-circle-inside-vector-symbol-circulation-funds-sign-interweaving-geometric-logo-207110242.webp'
const TemplateContainer = () => {
    return (
        <div className="template-container">
            <div className='overall-black'></div>
            <div className="black-box"></div>
            <div className="black-box2"></div>
            <div className="blue-box"></div>
            <div className="blue-box2"></div>
            <h1>Welcome to CZ Portal</h1>
            <blockquote>
                <p id="p1">ERP (Enterprise Resource Planning) systems streamline and integrate essential business processes across various departments, 
                    enhancing efficiency and data accuracy</p>
                <p id="p1">a
                    CRM (Customer Relationship Management) systems are designed to manage and analyze customer interactions and data throughout the customer lifecycle.</p>
            </blockquote>
            <p className="author">Sadiq Mohammed</p>
            <p className="designation">Managing Director</p>
            <div className="buttons">
                <button className="button back">&larr;</button>
                <button className="button forward">&rarr;</button>
            </div>
            <div className="bottom-container">
                <p id="job"><b>Get your own SAS solutions at <br />Cubezix</b></p>
                <p id='p2'>Software as a Service (SaaS) is a cloud computing service model where software applications are delivered over the internet.</p>
                <div className="profile-images">
                    <div className="one-box"></div>
                    <div className="two-box"></div>
                    <div className="three-box"></div>
                    <div className="four-box"></div>
                    <div className="five-box"></div>
                    <div className="circle">
                        <img src={starlogo} width="25" height="25" id="star" alt="Star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateContainer;
