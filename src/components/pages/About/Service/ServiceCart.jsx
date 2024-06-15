import { Link } from "react-router-dom";

const ServiceCart = ({service}) => {
    const {_id,title , img , price , description} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body items-start">
            <h2 className="card-title">{title}</h2>
            <p className=" text-orange-500">Price :  {price}</p>
            <div className="card-actions justify-end">
            <Link to={`Checkout/${_id}`}>
            <button className="btn btn-primary bg-orange-500 border-white hover:bg-orange-600 hover:border-white">Book Now</button>

            </Link>
            </div>
          </div>
        </div>
    );
};

export default ServiceCart;