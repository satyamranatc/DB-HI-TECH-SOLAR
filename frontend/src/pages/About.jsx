import React from 'react';
import { Shield, Award, Users, Star, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About DB HI TECH SOLAR</h2>
            <p className="text-lg text-gray-600 mb-6">
              DB HI TECH SOLAR ENERGY PVT LTD is at the forefront of India's renewable energy revolution. 
              With years of experience and hundreds of successful installations, we're committed to 
              making clean energy accessible to everyone.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified engineers and technicians ensures every installation meets the 
              highest standards of quality and performance. We use only premium components and 
              provide comprehensive warranties on all our systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-8 w-8 text-blue-500" />, title: "Quality Assured", desc: "Premium components with extended warranties" },
                { icon: <Award className="h-8 w-8 text-green-500" />, title: "Certified Team", desc: "Expert installation by certified professionals" },
                { icon: <Users className="h-8 w-8 text-purple-500" />, title: "Customer First", desc: "Dedicated support throughout your journey" },
                { icon: <Star className="h-8 w-8 text-yellow-500" />, title: "Proven Results", desc: "Thousands of satisfied customers nationwide" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Solar?</h3>
              <ul className="space-y-3">
                {[
                  "Reduce electricity bills by up to 90%",
                  "Increase property value significantly",
                  "Contribute to environmental protection",
                  "Government subsidies and tax benefits",
                  "25+ years of reliable performance"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;