import React from 'react';
import {Destination} from '../models/Destination';

interface IProps {
  destinations: Destination[];
  selectedDestination: Destination;
  setState: (destination: Destination) => void;
}

const DestinationMenu = (props: IProps) => {
  return (
    <div className='d-flex flex-row'>
      {props.destinations.map((destination) => (
        <button key={destination.Id} type='button'
          className={`btn text-secondary btn-destinations heading-3
          ${(props.selectedDestination.Id === destination.Id) ? 'btn-destinations-active' : ''}`}
          onClick={() => props.setState(destination)}>
          {destination.Name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default DestinationMenu;
