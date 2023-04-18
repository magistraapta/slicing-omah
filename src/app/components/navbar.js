import React from 'react';
import Button from './button';
export default function navbar() {
  return (
    <div className=' flex justify-around'>
      <div className='flex justify-between items-center w-10/12'>
        <div>
          <h4 className=' text-2xl'>Omah</h4>
        </div>
        <div className=' flex items-center  w-6/12  justify-between my-12'>
          <p>Home</p>
          <p>To rent</p>
          <p>For sale</p>
          <p>Blog</p>
          <Button text='Log In'  padding='py-5'/>
        </div>
      </div>
    </div>
  );
}
