import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    PinterestShareButton,
    PinterestIcon,
  } from 'next-share';
import { FacebookProvider, Comments, Like  } from 'react-facebook-next';
import { currentUrl } from '../../utils/currentURL';
import VideoItem from '../home/videos/VideoItem';

const VideoPage = ({video}) => {
  return (
    <div className="flex flex-col md:flex-row-reverse">
        <div className="flex flex-col md:w-[60%]">
            <div className="flex my-2 justify-center flex-1">
                <iframe className="w-[98%]" height="440" src={`https://www.youtube.com/embed/${video.videoURL.split('https://youtu.be/')[1]}`} title="I never thought this would be possible with CSS" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
                <h1 className="text-right mr-2 text-2xl mt-3">{video.title}</h1>
            </div>
            <div className='flex-1 flex justify-between my-3 px-2'>
                <div className='mt-3'>
                    <FacebookProvider appId="661762721736294">
                        <Like href={`${currentUrl}/video/${video.slug.current}`} colorScheme="dark" showFaces />
                    </FacebookProvider>
                </div>
                <div className='mt-3 space-x-2'>
                    <FacebookShareButton
                    url={`${currentUrl}/video/${video.slug.current}`}
                    // quote={'next-share is a social share buttons for your next React apps.'}
                    // hashtag={'#nextshare'}
                    >
                    <FacebookIcon size={35} round />
                    </FacebookShareButton>

                    <TwitterShareButton
                     url={`${currentUrl}/video/${video.slug.current}`}
                    //  quote={'next-share is a social share buttons for your next React apps.'}
                    //  hashtag={'#nextshare'}
                     >
                    <TwitterIcon size={35} round />
                    </TwitterShareButton>

                    <WhatsappShareButton
                     url={`${currentUrl}/video/${video.slug.current}`}
                    //  quote={'next-share is a social share buttons for your next React apps.'}
                    //  hashtag={'#nextshare'}
                     >
                    <WhatsappIcon size={35} round />
                    </WhatsappShareButton>

                    <PinterestShareButton
                     url={`${currentUrl}/video/${video.slug.current}`}
                    //  quote={'next-share is a social share buttons for your next React apps.'}
                    //  hashtag={'#nextshare'}
                     >
                    <PinterestIcon size={35} round />
                    </PinterestShareButton>
                </div>
            </div>
            <div className="flex-1">
            <FacebookProvider appId="661762721736294">
            <Comments href={`${currentUrl}/video/${video.slug.current}`} />
            </FacebookProvider>
            </div>
        </div>
        <div className="flex md:w-[40%] flex-col py-2">
            <h1 className='text-right text-lg font-semibold pb-2 border-r-4 border-slate-700 pr-2'>مزید ویڈیوز</h1>
            <hr className='my-3 mx-1'/>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
        </div>
     </div>
  )
}

export default VideoPage