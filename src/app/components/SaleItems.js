import React from 'react'
import ItemsCard from './ItemsCard'
import Home1 from '../images/home 1.svg'
import Home2 from '../images/home 2.svg'
import Home3 from '../images/home 3.svg'

export default function SaleItems() {
  return (
    <div className=' mt-12 flex justify-center'>
        <div className=' w-10/12 flex justify-between'>
            <ItemsCard source={Home1} title='Orange House' address='Jl Klapanunggal, cileungsi, bogor' price='$1,435,000' size='3 rooms'/>
            <ItemsCard source={Home2} title='White House' address='Jl Klapanunggal, cileungsi, bogor' price='$1,200,500' size='2 rooms'/>
            <ItemsCard source={Home3} title='Green House' address='Jl Klapanunggal, cileungsi, bogor' price='$2,300,500' size='4 rooms'/>
        </div>
    </div>
  )
}
