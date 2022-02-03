import React, { useState } from 'react';
import logo from '../photos/logo.PNG';

function Header() {
    const [notification, setNotification] = useState(true);
    const [display, setDisplay] = useState(false);

    return <div className='header'>
        <div className='header__item header__item--logo'>
            <span className='logo'><img alt='' src={logo} /></span>Practice Optimizer
        </div>
        <div className='header__item header__item--practice'>
            <label>Practice(s)</label>
            <select>
                <option>1: Your Dental Practice</option>
                <option>2: Your Dental Practice</option>
                <option>3: Your Dental Practice</option>
            </select>
        </div>
        <div className='header__item header__item--profile'>
            <div className='profile-heart'><i className='far fa-heart'></i></div>
            <div className='profile-notification'>
                <span className={notification ? 'notification__alert' : ''}></span>
                <i className='far fa-bell'></i>
            </div>
            <div className='profile-link'>
                <i className='far fa-user-circle'></i>
                <span>Your Dental Practice</span>
                <i className='fas fa-caret-down' onClick={() => setDisplay(!display)}></i>
                {display
                    ? <ul className='profile-menu'>
                        <li>example 1</li>
                        <li>example 2</li>
                        <li>example 3</li>
                        <li>example 4</li>
                    </ul>
                    : <></>
                }
            </div>
        </div>
    </div>;
};

export default Header;
