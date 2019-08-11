import React from 'react';
import './directory.scss'

import MenuItem from '../menu-item/MenuItem'

class Directory extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'HATS',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'JACKETS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'SNEAKERS',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'WOMEN',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/women'
        },
        {
          title: 'MEN',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/men'
        }
      ]
    }
  }

  render() {
    const {sections} = this.state;
    return (
      <div className='directory-menu'>
        {sections && sections.map(({id, ...otherSectionProps}) => {
          return <MenuItem key={id} {...otherSectionProps} />
        })}
      </div>
    )
  }
}


export default Directory;
