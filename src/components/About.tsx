import React from 'react'
import { Users, Award, Clock, Headphones, Target, Zap, Shield, Globe } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10+', color: 'text-blue-600' },
    { icon: Award, label: 'Client Satisfaction', value: '9.7/10', color: 'text-green-600' },
    { icon: Clock, label: 'Support Available', value: '24/7', color: 'text-purple-600' },
    { icon: Headphones, label: 'Campaigns Completed', value: '20+', color: 'text-orange-600' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Strategic Precision',
      description: 'We approach every project with meticulous planning and strategic thinking to ensure optimal results.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative solutions to stay ahead of the competition.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in all our deliverables and client interactions.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We understand diverse markets and cultures to create solutions that work worldwide.'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'KKP Creative & Tech Solutions was established with a vision to revolutionize digital marketing and web development.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, establishing our reputation in the market.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Began integrating AI-powered solutions into our service offerings, staying ahead of industry trends.'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Expanded our team with specialized experts in web development, AI, and digital marketing.'
    },
    {
      year: '2024',
      title: 'Award Recognition',
      description: 'Received industry recognition for innovative solutions and exceptional client satisfaction.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and expand our services to meet evolving market demands.'
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4 shadow-lg">
            <Award className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-bold text-green-700">About KKP Creative & Tech Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            A Multidisciplinary Creative and AI Agency
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Committed to driving brand growth through strategic innovation, intelligent design, 
            and data-driven solutions that deliver measurable results.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-xl mb-4 shadow-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className={`text-3xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-xl border border-blue-100">
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
              <Target className="h-6 w-6 text-blue-600 mr-3" />
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              We believe in the power of technology to transform businesses and create meaningful 
              connections between brands and their audiences. Our mission is to deliver innovative 
              solutions that drive growth and success.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              With a focus on precision, innovation, and strategic thinking, we help businesses 
              navigate the digital landscape and achieve their goals through cutting-edge technology 
              and creative solutions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl p-6 shadow-xl border border-purple-100">
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
              <Zap className="h-6 w-6 text-purple-600 mr-3" />
              Our Vision
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              To become the leading digital transformation partner for businesses worldwide, 
              recognized for our innovative solutions, exceptional service, and commitment to client success.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We envision a future where every business can leverage the power of AI and digital 
              marketing to reach their full potential and create lasting impact in their industries.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-3">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-xl font-bold text-blue-600 mb-1">{item.year}</div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-lg flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Why Choose KKP Creative & Tech Solutions?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1">5+</div>
              <div className="text-blue-100 text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-blue-100 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-sm">Client Satisfaction</div>
            </div>
          </div>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto text-sm">
            We combine deep technical expertise with strategic precision and innovative thinking 
            to deliver solutions that drive businesses forward.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
