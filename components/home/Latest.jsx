import React from 'react'
import NewsCardHorizontal from './NewsCardHorizontal'

const Latest = () => {
  return (
    <div className='w-full md:w-auto md:basis-1/2 bg-white border-l border-gray-200'>
       <h1 className='text-right font-semibold py-2 border-r-4 border-yellow-300 pr-2'> تازہ ترین خبریں</h1>
       <hr className='my-2 mx-1'/>
       <div className="flex flex-col">
        <NewsCardHorizontal />
        <NewsCardHorizontal />
        <NewsCardHorizontal />
        <NewsCardHorizontal />
        <NewsCardHorizontal />
        <NewsCardHorizontal />
       </div>
    </div>
  )
}

export default Latest