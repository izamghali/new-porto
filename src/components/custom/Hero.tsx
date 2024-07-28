import { toast } from "sonner";

export default function Hero({ className }: { className?: string }) {

    const index = Math.floor(Math.random() * 3)

    const videoSources = [
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/ocean.mp4?alt=media&token=b2e0b459-aed0-4c27-9331-651d4da56f04', 
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video5.webm?alt=media&token=55674362-8a82-49ad-a33b-684c192e9906', 
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video4-converted.webm?alt=media&token=fb0f2a7d-0164-4c6e-81a5-d8aef66df5ac',
    ]

    const trackList = [
        {
            idName: '',
            url: ''
        },
        {
            idName: '',
            url: ''
        },
        {
            idName: '',
            url: ''
        },
    ]

    // dresage - perfect day
    // serani poji - sugar boo
    // lola marsh - something stupid

    // 0 - ocean 
    // 1 - disk
    // 2 - flower

    function handleProgress() {
        toast('the video is downloading')
    }

    function handlePlayThrough() {
        toast('the media can be played through')
    }


    return (
        <section className={`${ className } `}>
            <video className="lg:block hidden object-cover h-screen w-screen" autoPlay={true} controls={false} muted loop={true} >
                <source src={videoSources[1]} type="video/webm"/>
            </video>
            <video className="lg:hidden block object-cover h-screen w-screen" autoPlay={true} controls={false} muted loop={true} width={2160} height={3840} >
                <source src={'https://videos.pexels.com/video-files/7956444/7956444-uhd_2160_3840_24fps.mp4'} type="video/mp4"/>
            </video>
        </section>
    )
};

