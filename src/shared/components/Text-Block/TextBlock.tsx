import React from 'react';

interface IProps {
  header: JSX.Element;
  title: string;
  description: string;
  footer?: JSX.Element;
}

const TextBlock = (props: IProps) => {
  return (
    <div className='col-md-4 col-8'>
      {props.header}
      <h1 className='heading-1 text-light'>{props.title}</h1>
      <p className='text-secondary body-text'>{props.description}</p>
      {props.footer && <hr />}
      {props.footer}
    </div>
  );
};

export default TextBlock;
