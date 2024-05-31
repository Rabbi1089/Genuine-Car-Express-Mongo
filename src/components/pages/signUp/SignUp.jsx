import { Link } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const SignUp = () => {

  const {createUser} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {name , email , password } = data
        createUser(email , password)
        .then((result) => {
          const user = result.user;
       console.log(user)
        })
        .catch((error) => {
          console.error(error , error.message)
        });
      }

   
      return (
        <div className="hero max-h-[780px]  p-4">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="mr-12 w-1/2">
            <img src={img} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mt-6 text-center">Login!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                
                  placeholder="Enter your name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                 {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
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
                <Link to='/'>Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;