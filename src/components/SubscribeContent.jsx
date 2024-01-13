function SignUp(){
    return (
        <div className="hero justify-center bg-secondary-focus py-10">
            <div className="hero-content text-center flex-col lg:flex-row lg:whitespace-nowrap">
                <div className="text-center lg:text-left lg:mr-20">
                    <h1 className="text-6xl font-bold">Get 10% off!🥳</h1>
                    <p className="py-6">Get a 10% off if you join our waitlist!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ask us anything (Optional)</span>
                            </label>
                            <textarea placeholder="Ask us anything" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                        </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
