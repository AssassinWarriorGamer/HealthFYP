import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$7,846</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
            
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$1,437,876</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11,437</p>
                <p className='text-gray-600'>Customers</p>
            </div>
            
        </div>
    </div>
  )
}

export default TopCards
