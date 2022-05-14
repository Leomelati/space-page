import React, {useState} from 'react';
import FooterBlock from '../../shared/components/FooterBlock/FooterBlock';
import {FooterItem} from '../../shared/components/FooterBlock/models/FooterItem';
import MainHeader from '../../shared/components/Navigation/MainHeader';
import TextBlock from '../../shared/components/Text-Block/TextBlock';
import DestinationMenu from './components/destination-menu';
import {Destination} from './models/Destination';

const DestinationPage = () => {
  const DESTINATION_DUMMY: Destination[] = [
    {
      Id: '1',
      Name: 'Moon',
      Description: 'Moon description.',
      Image: 'image-moon.png',
      Distance: '384,400 KM',
      TravelTime: '3 DAYS',
    },
    {
      Id: '2',
      Name: 'Mars',
      Description: 'Mars description.',
      Image: 'image-mars.png',
      Distance: '225 MIL. KM',
      TravelTime: '9 MONTHS',
    },
    {
      Id: '3',
      Name: 'Europa',
      Description: 'Europa description.',
      Image: 'image-europa.png',
      Distance: '628 MIL. KM',
      TravelTime: '3 YEARS',
    },
    {
      Id: '4',
      Name: 'Titan',
      Description: 'Titan description.',
      Image: 'image-titan.png',
      Distance: '1.6 BIL. KM',
      TravelTime: '7 YEARS',
    },
  ];
  const [selectedDestination, setSelectedDestination] = useState(DESTINATION_DUMMY[0]);

  const createFooterItens = (): FooterItem[] => {
    const items: FooterItem[] = [];

    items.push(new FooterItem('AVG. DISTANCE', selectedDestination.Distance));
    items.push(new FooterItem('EST. TRAVEL TIME', selectedDestination.TravelTime));
    return items;
  };

  // TO DO: Rever
  // const defineImagePath = (): string => {
  //   console.log(`../../assets/images/image-${selectedDestination.Name.toLowerCase()}.png`);
  //   return `../../assets/images/image-moon.png`;
  // };

  return (
    <div className='background-destination'>
      <MainHeader />
      <main>
        <div className='d-flex justify-content-around align-items-center h-100'>
          <div>
            <p className='heading-5 text-light'><span>01</span> PICK YOUR DESTINATION </p>
            <img src={require('../../assets/images/image-moon.png')}></img>
          </div>
          <TextBlock
            header={<DestinationMenu
              destinations={DESTINATION_DUMMY}
              selectedDestination={selectedDestination}
              setState={setSelectedDestination}
            />}
            title={selectedDestination.Name.toUpperCase()}
            description={selectedDestination.Description}
            footer={
              <FooterBlock
                items={createFooterItens()}
              />
            }
          />
        </div>
      </main>
    </div>
  );
};

export default DestinationPage;
