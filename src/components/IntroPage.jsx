import Image from 'next/image'

function FirstSlide(){
    return (
        <div className="hero min-h-fit bg-neutral">
            <div className="hero-content flex-col lg:flex-row">
                <div class="relative mb-5 lg:hidden mx-auto bg-gradient-to-b from-sky-400 rounded-full w-80 h-80">
                    <Image
                        className='object-contain h-full w-full'
                        src="/iphone.png"
                        fill={true}
                        alt={"Product Display"}
                    />
                </div>
                
                <div className='text-center lg:text-left lg:mr-20'>
                    <h1 className="text-4xl lg:text-5xl mb-5 font-bold">Meet Palmo! 👋</h1>
                    <h1 className="text-4xl lg:text-5xl text-primary font-bold">The First-Ever</h1>
                    <h1 className="text-4xl lg:text-5xl font-bold">Palm Payment Device!</h1>
                    <p className="py-6">Sign up to get an early access!</p>
                    <button className="btn btn-primary">Get 10% Discount Now!</button>
                </div>

                <div className="relative mx-auto bg-gradient-to-b from-sky-500 rounded-full w-[600px] h-[600px] hidden lg:flex">
                    <Image
                        className='object-contain h-full w-full'
                        src="/iphone.png"
                        fill={true}
                        alt={"Product Display"}
                    />
                </div>  
            </div>
        </div>
    )
}

export default FirstSlide;