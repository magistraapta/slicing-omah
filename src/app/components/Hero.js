import React from 'react';
import Image from 'next/image';
import heroImage from '../images/bernard-hermant-KqOLr8OiQLU-unsplash 1.svg';
import HeaderText from './HeaderText';
import Button from './button';
export default function Hero() {
  return (
    <div className=''>
      <HeaderText />
      <div className=' w-11/12 relative pb-12 mb-10'>
        <Image src={heroImage} alt='hero pict' className='w-full' />
        <div className='absolute bottom-0 right-0 bg-white flex items-center w-8/12 justify-around py-5 shadow-xl'>
          <div>
            <form action='/action_page.php'>
              <p>Select City</p>
              <select id='city' name='city' className=' text-slate-400'>
                <option value='Jakarta'>Jakarta</option>
                <option value='Denpasar'>Denpasar</option>
                <option value='Bandung'>Bandung</option>
                <option value='Surabaya'>Surabaya</option>
              </select>
            </form>
          </div>
          <div>
            <form action='#'>
              <p>Price</p>
              <select id='city' name='city' className=' text-slate-400'>
                <option value='Jakarta'>$100 - $200</option>
                <option value='Denpasar'>$200 - $400</option>
              </select>
            </form>
          </div>
          <div>
            <form action='#'>
              <p>Rooms</p>
              <select id='city' name='city' className=' text-slate-400'>
                <option value='Jakarta'>1 Rooms</option>
                <option value='Denpasar'>2 Rooms</option>
                <option value='Bandung'>3 Rooms</option>
              </select>
            </form>
          </div>
          <div>
            <form action='#'>
              <p>Footage</p>
              <select id='city' name='city' className=' text-slate-400'>
                <option value='Jakarta'>1 Footage</option>
              </select>
            </form>
          </div>
          <Button text='Search' padding='py-5' />
        </div>
      </div>
    </div>
  );
}
