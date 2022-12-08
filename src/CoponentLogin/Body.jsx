import LoginForm from "./FormLogin";

const Body = () => {
    return (
        <main className="panelContacto relative w-full mx-auto px-5 sm:px-6 lg:px-9 ">
            <div className="row relative max-w-xl mx-auto responsive justify-content-center text-white">
                <div className="panelSusp my-5 col-md-4 shadow-lg p-3 mb-5 ">
                    <div className="text-left">
                        <h3 className="h3">Log In</h3>
                        <p>
                            Don't have an account yet?  
                            <a href="#" id="fromRegister" classNameName="loginA">
                                  Register
                            </a>
                        </p>
                    </div>
                    <LoginForm />
                    <br />
                    <small className="form-text text-muted">
                        <a href="#" id="fromForgotPass"  classNameName="loginA">
                            Forgot Password?
                        </a>
                    </small>
                </div>
                <div id="users"></div>
            </div>

        </main>
    )

}

export default Body;

