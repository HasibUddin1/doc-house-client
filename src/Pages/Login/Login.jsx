import { Link } from "react-router-dom";
import { googleSignIn } from "../../reduxServices/actions/authActions";


const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }

    const handleGoogleLogin = () => {
        googleSignIn()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">New to this site?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="text-center">
                            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                G
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;