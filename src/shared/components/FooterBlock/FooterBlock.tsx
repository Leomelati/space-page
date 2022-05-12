import React from 'react';
import {FooterItem} from './models/FooterItem';

interface IProps {
  items: FooterItem[]
}

const FooterBlock = (props: IProps) => {
  return (
    <div className='d-flex flex-row'>
      {props.items.map((item) => (
        <div key={item.Title} className='col'>
          <p className='text-secondary subheading-2'>{item.Title.toUpperCase()}</p>
          <p className='text-light subheading-1'>{item.Text.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterBlock;
