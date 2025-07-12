import React from 'react';
import { Sun, Zap, Battery, Wrench, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Residential Solar",
      description: "Complete solar solutions for homes with premium panels and inverters",
      features: ["Rooftop Installation", "Grid-Tie Systems", "Battery Backup", "Smart Monitoring"]
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-500" />,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses and industries",
      features: ["Industrial Solutions", "Energy Management", "Cost Optimization", "Maintenance Support"]
    },
    {
      icon: <Battery className="h-12 w-12 text-green-500" />,
      title: "Energy Storage",
      description: "Advanced battery systems for energy independence",
      features: ["Lithium-Ion Batteries", "Backup Power", "Load Management", "Remote Monitoring"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-purple-500" />,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and support services",
      features: ["Regular Cleaning", "Performance Monitoring", "Quick Repairs", "24/7 Support"]
    }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;