import React from "react";
import Service from "./Service";
import dev from "../../assets/Services/dev.json";
import auditing from "../../assets/Services/auditing.json";
import solution from "../../assets/Services/solution.json";
import custom from "../../assets/Services/custom.json";
import education from "../../assets/Services/education.json";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceName: "Decentralized application development",
      animation: dev,
    },
    {
      id: 2,
      serviceName: "Smart contract development and auditing",
      animation: auditing,
    },
    {
      id: 3,
      serviceName: "Custom blockchain solutions for businesses",
      animation: solution,
    },
    {
      id: 4,
      serviceName: "Blockchain and cryptocurrency consulting",
      animation: custom,
    },
    {
      id: 5,
      serviceName:
        "Training and education on blockchain and cryptocurrency technologies",
      animation: education,
    },
  ];
  return (
    <div>
      <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">
        {" "}
        My Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
        {services.map((service, i) => (
          <Service key={i} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
