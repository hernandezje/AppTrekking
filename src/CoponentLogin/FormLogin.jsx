
const LoginForm = () => {
    return (

        <form action="">
            <div class="form-group my-4 text-white">
                <label for="floatingInput">Email address</label>
                <input type="formEmail" class="form-control LoginInput" id="floatingInput" placeholder="name@example.com" />
            </div>
            <div class="form-group my-4 text-white">
                <label for="floatingPassword">Password</label>
                <input type="formPassword" class="form-control LoginInput" id="floatingPassword" placeholder="Password" />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" class="btn btn-outline-success">  Log In  </button>
            </div>

        </form>
    )
}

export default LoginForm;