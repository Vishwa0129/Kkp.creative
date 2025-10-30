import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Play, Sparkles, Zap, Target, Star, Award, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useAnimations'
import ParticleSystem from './ParticleSystem'
import { 
  Heading1, 
  BodyLarge, 
  Button, 
  Container, 
  Grid, 
  Icon 
} from './ui'

const Hero: React.FC = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.1)
  const navigate = useNavigate()
  const [statsRef, isStatsVisible] = useScrollAnimation(0.2)

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10+', color: 'text-blue-600' },
    { icon: Award, label: 'Projects Completed', value: '20+', color: 'text-green-600' },
    { icon: Star, label: 'Client Satisfaction', value: '9.7/10', color: 'text-purple-600' },
    { icon: Zap, label: 'Support Available', value: '24/7', color: 'text-orange-600' },
  ]

  return (
    <section 
      ref={heroRef}
      className={`relative bg-gradient-3d py-12 md:py-16 overflow-hidden transition-all duration-1000 hero-3d ${
        isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Professional 3D Background Layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial-blue-purple"></div>
        
        {/* Floating 3D Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-float-gentle animation-delay-100"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg rotate-45 animate-tilt-3d animation-delay-200"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full animate-bounce-3d animation-delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg rotate-12 animate-spin-3d animation-delay-400"></div>
        
        {/* Professional Background Image with 3D Effect */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 transform translate-z-50" 
             style={{
               backgroundImage: `url('/images/services/digital-transformation.jpg')`,
               backgroundPosition: 'center top'
             }}>
        </div>
      </div>

      {/* Professional Particle System */}
      <ParticleSystem />
      
      <Container size="2xl" className="relative z-10 transform-style-3d">
        <div className="text-center">
          {/* Professional 3D Brand Badge */}
          <div className={`inline-flex items-center px-6 py-3 glass-morphism rounded-full shadow-2xl mb-6 transition-all duration-700 delay-200 transform hover:scale-110 hover:translate-z-100 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-neon-pulse">
                <Icon icon={Sparkles} size="sm" className="text-white" />
              </div>
              <span className="text-sm font-bold text-gray-800">Kernel. Key. Precision.</span>
            </div>
          </div>

          <Heading1 className={`mb-6 transition-all duration-700 delay-300 transform hover:scale-105 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            We Take Your{' '}
            <span className="text-gradient-3d animate-gradient-shift">
              Business
            </span>{' '}
            Online
          </Heading1>
          
          <BodyLarge className={`mb-8 max-w-5xl mx-auto transition-all duration-700 delay-400 transform hover:translate-z-50 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Transform your business with cutting-edge digital solutions. From web development to AI-powered marketing, 
            we help you establish a powerful online presence that drives growth and success.
          </BodyLarge>

          {/* Professional 3D Key Features */}
          <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-500 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="group floating-card hover:neon-glow">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Icon icon={Zap} size="md" className="text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-800">AI-Powered Solutions</span>
              </div>
            </div>
            <div className="group floating-card hover:neon-glow">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Icon icon={Target} size="md" className="text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Strategic Precision</span>
              </div>
            </div>
            <div className="group floating-card hover:neon-glow">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Icon icon={Sparkles} size="md" className="text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Innovative Thinking</span>
              </div>
            </div>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Button
              variant="primary"
              size="large"
              className="group neon-glow hover:animate-neon-pulse transform hover:scale-110 hover:translate-z-100"
              onClick={() => navigate('/contact')}
            >
              Get Started Today
              <Icon icon={ArrowRight} size="sm" className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="large"
              className="group glass-morphism hover:neon-glow transform hover:scale-110 hover:translate-z-100"
            >
              <Icon icon={Play} size="sm" className="mr-2 group-hover:scale-125 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Professional 3D Stats */}
          <div 
            ref={statsRef}
            className={`mt-12 max-w-5xl mx-auto transition-all duration-700 delay-700 ${
              isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <Grid cols={4} gap="lg">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group transform-style-3d">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color.replace('text-', 'from-').replace('-600', '-500')} to-${stat.color.replace('text-', '').replace('-600', '-600')} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-125 group-hover:rotate-12 group-hover:translate-z-50 transition-all duration-500 shadow-2xl neon-glow`}>
                    <Icon icon={stat.icon} size="lg" className="text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-black mb-1 group-hover:scale-110 group-hover:translate-z-100 transition-all duration-300 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{stat.label}</div>
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero