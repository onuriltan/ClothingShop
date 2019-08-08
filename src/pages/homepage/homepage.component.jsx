import React from 'react';

import './homepage.styles.scss'
import MenuItem from '../../components/menu-item/menu-item.component'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem title='HATS'/>
        <MenuItem title='JACKETS'/>
        <MenuItem title='WOMEN'/>
        <MenuItem title='MEN'/>
      </div>
    </div>
  );
};

export default HomePage;
