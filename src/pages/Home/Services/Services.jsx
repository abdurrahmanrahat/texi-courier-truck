import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#072953] to-[#2A548E] text-white p-2 md:p-8">
      <h4 className="text-lg font-semibold">Services</h4>

      <div className="md:ml-4">
        <h2 className="text-2xl font-semibold">
          A <span className="text-[#ED1B24]">smarter</span> container transport
          business
        </h2>
        <p>
          An on-demand container transport solution that works, utilizing the
          latest in GPS, geo-mapping <br /> software, and technology.
        </p>
      </div>

      {/* fetch the data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-2 md:px-2">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
