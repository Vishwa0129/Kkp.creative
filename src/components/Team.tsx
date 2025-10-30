import React from 'react'
import { Linkedin, Twitter, Github, Award, Users, Clock, Star } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Pranavi',
      role: 'FOUNDER',
      title: 'Company & Marketing Head',
      description: 'Manages all marketing strategies and financial operations of the company. With expertise in Business development, Pranavi leads our creative vision and ensures sustainable growth with overpowered solutions that ensures success of our company.',
      specialties: ['Full Stack Development', 'Data Analytics', 'Machine Learning', 'Marketing Strategy', 'Financial Management', 'Brand Development'],
      image: '/images/team/pranavi.jpg',
      experience: '5+ years',
      projects: '25+ completed',
      rating: 4.9
    },
    {
      name: 'Vishwa Teja',
      role: 'CO-FOUNDER',
      title: 'Web Developer & Tech Lead',
      description: 'Handles all web development and technology operations with an impressive portfolio in modern web technologies. Vishwa manages every aspect of our online presence and technical infrastructure.',
      specialties: ['Web Development', 'Full-Stack Development', 'Tech Management', 'Digital Solutions', 'Meta Ads', 'Google Ads', 'Social Media Management'],
      image: '/images/team/vishwa.jpg',
      experience: '4+ years',
      projects: '30+ completed',
      rating: 4.8
    }
  ]

  const achievements = [
    { icon: Users, label: 'Team Members', value: '2+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Clock, label: 'Projects Completed', value: '50+' },
    { icon: Star, label: 'Client Rating', value: '4.9/5' },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Users className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-700">Meet Our Leaders</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Together, We Transform Ideas Into Impact
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate team combines technical expertise with creative vision to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-3">
                <achievement.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
              <div className="text-gray-600 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Header with Professional Photo */}
                  <div className="relative h-56 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Professional Photo Background */}
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
                         style={{
                           backgroundImage: `url('/images/team/${member.name.toLowerCase().replace(' ', '-')}.jpg')`,
                           backgroundPosition: 'center top'
                         }}>
                    </div>
                    
                    <div className="relative z-10 flex items-center h-full">
                      <div className="w-28 h-28 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-3 border-white/50 shadow-2xl overflow-hidden">
                        <OptimizedImage
                          src={`/images/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                          alt={`${member.name} - ${member.title}`}
                          className="w-full h-full rounded-full"
                          fallback={
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                              {member.name.charAt(0)}
                            </div>
                          }
                        />
                      </div>
                      <div className="ml-6 text-white">
                        <h3 className="text-2xl font-black mb-1">{member.name}</h3>
                        <p className="text-purple-200 font-bold text-base mb-0.5">{member.role}</p>
                        <p className="text-blue-100 text-sm">{member.title}</p>
                      </div>
                    </div>
                  </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-base font-semibold text-gray-700">{member.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Experience</div>
                    <div className="font-semibold text-gray-900 text-sm">{member.experience}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {member.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs text-gray-500">Projects Completed</div>
                      <div className="font-semibold text-gray-900 text-sm">{member.projects}</div>
                    </div>
                        <div className="flex space-x-3">
                          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn Profile">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Twitter Profile">
                            <Twitter className="h-5 w-5" />
                          </a>
                          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="GitHub Profile">
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                  </div>
                  
                  {/* Removed View Portfolio button as requested */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">Join Our Growing Team</h3>
            <p className="text-purple-100 mb-4 max-w-2xl mx-auto text-sm">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
