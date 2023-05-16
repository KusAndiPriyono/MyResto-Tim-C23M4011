import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header class='header' id='header'>
      <div class='navbar-wrapper'>
        <nav class='navbar'>
          <img
            class='logo'
            src='/images/logo-resto.jpg'
            alt='logo-resto'
            height='70'
          />
          <button class='hamburger-btn' id='hamburger-btn'>
            <i class='fas fa-bars'></i>
          </button>
          <ul class='nav-items'>
            <li class='nav-item'>Home</li>
            <li class='nav-item'>Menu</li>
            <li class='nav-item'>Booking Resto</li>
            <li class='nav-item'>Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
