import LoginForm from "./FormLogin";

const Body = () => {
    return (
        <main className="relative w-full mx-auto px-5 sm:px-6 lg:px-9 ">
            <div class="row relative max-w-xl mx-auto responsive justify-content-center my-4 text-white">
                <div class="col-md-5">
                    <div class="text-left">
                        <h3 class="h3">Log In</h3>
                        <p>
                            Don't have an account yet? 
                            <a href="#" id="loginSwitcher" className="loginA">
                                  Register
                            </a>
                        </p>
                    </div>
                    <LoginForm />
                    <br />
                    <small class="form-text text-muted">
                        <a href="#" id="forgotswitcher"  className="loginA">
                            Forgot Password?
                        </a>
                    </small>
                </div>
            </div>

        </main>
    )

}

export default Body;

