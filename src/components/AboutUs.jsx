function AboutUs(){
    return(
        <div className="hero justify-center bg-base-200">
            <div className="hero-content text-center flex-col">
                <div className=" min-w-fit lg:w-[1000px] min-h-fit">
                    <h1 className="text-5xl font-bold py-10">Pay with your palm in 3 easy steps!</h1>
                    <div className="aspect-w-16 aspect-h-9 mb-10">
                        <iframe className="rounded-[40px]" src="https://www.youtube.com/embed/YiIB0KrZyOM?si=-jR-FaHKrOJjPsq3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <h1 className="text-xl">Steps:</h1>
                <ul className="steps steps-vertical mb-10">
                    <li className="step step-primary">Insert Your Credit Card / Register Online</li>
                    <li className="step step-primary">Enter your email</li>
                    <li className="step step-primary">You&apos;re all set to pay with Palmo!</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs;