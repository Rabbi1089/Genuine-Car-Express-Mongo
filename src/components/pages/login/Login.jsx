import { Link } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
const Login = () => {
  const { signIn, setUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        console.error(error, error.message);
      });
  };

  return (
    <div className="hero max-h-[780px]  p-4">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mr-12 w-1/2">
          <img src={img} />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold mt-6 text-center">Login!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=" font-semibold text-center mb-2">
            Have an account?
            <span className=" font-bold text-orange-600">
              {" "}
              <Link to="/signUp">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
