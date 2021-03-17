const SignUp = () => {

    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>



            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p>
                <a href="/login">Already have an account?</a>
            </p>
        </div>
    )
}

export default SignUp;