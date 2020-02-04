import React from 'react';

export default function Header() {
  return (
    <div className='header Header'>
      <div className="Header__description">
        <p>Search vacant properties in the Saint Louis, MO area.</p>
      </div>
      <div className="Header__openstl-credits">
        <p>Made with love by <a href="https://openstl.org/" target="_new">OpenSTL</a></p>
      </div>
      <div className='Header__title'>
        <h1>Vacancy Search</h1>        
      </div>
    </div>
  )
}