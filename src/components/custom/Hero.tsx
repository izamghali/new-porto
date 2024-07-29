export default function Hero({ className }: { className?: string }) {
    return (
        <section className={`${ className } `}>
            <video className="object-cover h-screen w-screen" autoPlay={true} controls={false} muted loop={true} >
                <source src={'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video5.webm?alt=media&token=55674362-8a82-49ad-a33b-684c192e9906'} type="video/webm"/>
            </video>
        </section>
    )
};