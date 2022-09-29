import React from 'react'
import Headline from './Headline'
import Latest from './Latest'
import Pictures from './Pictures'
import TopStories from './TopStories'
import Videos from './videos/Videos'

const HomeContent = ({images, latestVideo, moreVideos, headlineVideos, topStories, latestnews, headline}) => {
  return (
    <div className='flex flex-col'>
        <div className="flex lg:flex-row w-full md:space-x-2 flex-col-reverse my-4 px-1">
          <Pictures images={images} />
          <div className='flex flex-col lg:w-[75%]'>
            <Headline headline={headline} />
            <hr className='my-3 mx-1 hidden lg:block'/>
            <div className='flex flex-col lg:flex-row lg:space-x-2'>
              <TopStories topStories={topStories} />
              <Latest latestnews={latestnews}/>
            </div>
          </div>
        </div>
        <hr className='my-5 mx-1 md:mx-3'/>
        <div className="flex p-1">
          <Videos latestVideo={latestVideo} moreVideos={moreVideos} headlineVideos={headlineVideos}/>
        </div>
    </div>
  )
}

export default HomeContent