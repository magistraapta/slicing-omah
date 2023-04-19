import React from 'react';

export default function SaleHeader() {
  return (
    <div className='flex justify-center'>
      <div className=' w-10/12 flex justify-between items-center'>
        <div className='  flex w-4/12 items-center justify-between'>
          <h3 className='text-4xl'>The latest</h3>
          <div className='  flex w-6/12 justify-between'>
            <p className='text-2xl text-orange-500 font-light'>For sale</p>
            <p className='text-2xl font-light text-slate-400'>To rent</p>
          </div>
        </div>
        <p className=' underline text-2xl'>View all</p>
      </div>
    </div>
  );
}
