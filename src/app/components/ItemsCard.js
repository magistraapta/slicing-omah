import React from 'react';
import Image from 'next/image';
export default function ItemsCard({source, title, price, address, size}) {
  return (
    <div className=''>
      <div className='relative'>
        <Image src={source} alt='item pict' />
        <div className='absolute bottom-0 left-0 p-4 bg-white'>
            <p className='text-orange-500'>{size}</p>
        </div>
      </div>
      <div className=' w-8/12 mt-6'>
        <div className='mb-4 '>
          <h3 className='text-3xl font-medium'>{title}</h3>
          <p className='text-slate-400'>{address}</p>
        </div>
        <h4 className='text-2xl font-medium text-orange-500'>{price}</h4>
      </div>
    </div>
  );
}
