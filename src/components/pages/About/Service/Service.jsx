import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {
    const [services , setServices ] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(result => result.json())
        .then(data => setServices(data))
    }, [])

  return (
    <div>
      <div className="lg:w-1/2 mx-auto text-center">
        <p className="text-xl text-red-400 font-bold">Service</p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-y-6 justify-between mb-6">

      {
        services.map(( service, idx) => <ServiceCart key={idx} service={service}></ServiceCart> )
      }



      </div>
    </div>
  );
};

export default Service;
