import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'TechStart India',
      role: 'CEO',
      content: 'KKP Creative & Tech Solutions transformed our digital presence completely. Their AI-powered solutions helped us increase our online visibility by 300% in just 3 months.',
      rating: 5,
      image: '/images/testimonials/rajesh.jpg',
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'Creative Agency',
      role: 'Marketing Director',
      content: 'The team at KKP Creative & Tech Solutions is exceptional. They delivered our website ahead of schedule and exceeded all our expectations. Highly recommended!',
      rating: 5,
      image: '/images/testimonials/priya.jpg',
      project: 'Corporate Website'
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Local Business',
      role: 'Owner',
      content: 'Working with KKP Creative & Tech Solutions was a game-changer for our business. Their digital marketing strategies brought us 5x more customers.',
      rating: 5,
      image: '/images/testimonials/amit.jpg',
      project: 'Digital Marketing'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      company: 'Healthcare Clinic',
      role: 'Director',
      content: 'Their PowerBI dashboard setup revolutionized how we track our business metrics. The insights are invaluable for decision making.',
      rating: 5,
      image: '/images/testimonials/sneha.jpg',
      project: 'Analytics Dashboard'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      company: 'Manufacturing Co.',
      role: 'Operations Manager',
      content: 'KKP Creative & Tech Solutions helped us automate our processes with AI tools. The efficiency gains have been remarkable.',
      rating: 5,
      image: '/images/testimonials/vikram.jpg',
      project: 'AI Automation'
    },
    {
      id: 6,
      name: 'Anita Desai',
      company: 'Educational Institute',
      role: 'Principal',
      content: 'Their mobile app development service was outstanding. The app has significantly improved our student engagement.',
      rating: 5,
      image: '/images/testimonials/anita.jpg',
      project: 'Mobile App'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <Star className="h-4 w-4 text-yellow-600 mr-2" />
            <span className="text-sm font-semibold text-yellow-700">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
                <Quote className="h-6 w-6 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
