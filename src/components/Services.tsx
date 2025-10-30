import React, { useState, useMemo, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  Smartphone, 
  Target, 
  Code, 
  BarChart3, 
  Bot, 
  Megaphone, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  LucideIcon
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useAnimations'
import LetsTalkCTA from './LetsTalkCTA'

interface Service {
  id: number
  title: string
  description: string
  icon: LucideIcon
  category: 'web' | 'marketing' | 'ai'
  features: string[]
  popular: boolean
  price: string
  duration: string
  rating: number
  projects: string
  image?: string
}

interface Category {
  id: string
  name: string
}

interface ServiceCardProps {
  service: Service
  index: number
  isVisible: boolean
}

const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom website development that combines stunning design with powerful functionality to drive business growth.',
    icon: Code,
    category: 'web',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization'],
    popular: true,
    price: 'Starting at ₹25,000',
    duration: '2-4 weeks',
    rating: 4.9,
    projects: '15+ completed'
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: 'Complete social media management to build your brand presence and engage with your audience effectively.',
    icon: Megaphone,
    category: 'marketing',
    features: ['Content Strategy', 'Community Management', 'Posting Schedule', 'Analytics Reporting'],
    popular: true,
    price: 'Starting at ₹15,000/month',
    duration: 'Ongoing',
    rating: 4.8,
    projects: '12+ active'
  },
  {
    id: 3,
    title: 'Targeted Ad Campaigns',
    description: 'Data-driven advertising campaigns across platforms that maximize ROI and reach your ideal customers.',
    icon: Target,
    category: 'marketing',
    features: ['Facebook Ads', 'Google Ads', 'Instagram Campaigns', 'LinkedIn Marketing'],
    popular: true,
    price: 'Starting at ₹10,000/month',
    duration: 'Ongoing',
    rating: 4.9,
    projects: '20+ campaigns'
  },
  {
    id: 4,
    title: 'PowerBI Dashboard Setup',
    description: 'Transform your data into actionable insights with custom PowerBI dashboards and comprehensive analytics solutions.',
    icon: BarChart3,
    category: 'web',
    features: ['Data Visualization', 'Custom Reports', 'Real-time Analytics', 'Business Intelligence'],
    popular: false,
    price: 'Starting at ₹30,000',
    duration: '3-5 weeks',
    rating: 4.7,
    projects: '8+ dashboards'
  },
  {
    id: 5,
    title: 'AI Automation Tools',
    description: 'AI-powered automation tools that help you streamline your marketing and business processes.',
    icon: Bot,
    category: 'ai',
    features: ['AI Chatbot', 'AI Email Marketing', 'AI Analytics', 'Process Automation'],
    popular: false,
    price: 'Starting at ₹40,000',
    duration: '4-6 weeks',
    rating: 4.8,
    projects: '6+ tools'
  },
  {
    id: 6,
    title: 'AI Marketing',
    description: 'Strategic AI marketing that amplifies your brand message and reaches new audiences authentically.',
    icon: TrendingUp,
    category: 'ai',
    features: ['AI Content Creation', 'AI Analytics', 'Predictive Marketing', 'Personalization'],
    popular: false,
    price: 'Starting at ₹35,000',
    duration: '3-4 weeks',
    rating: 4.9,
    projects: '10+ campaigns'
  },
  {
    id: 7,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: Smartphone,
    category: 'web',
    features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Store Optimization'],
    popular: true,
    price: 'Starting at ₹50,000',
    duration: '6-8 weeks',
    rating: 4.8,
    projects: '5+ apps'
  },
  {
    id: 8,
    title: 'SEO & Content Marketing',
    description: 'Comprehensive SEO strategies and content marketing to boost your online visibility and engagement.',
    icon: Globe,
    category: 'marketing',
    features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Performance Tracking'],
    popular: false,
    price: 'Starting at ₹20,000/month',
    duration: 'Ongoing',
    rating: 4.7,
    projects: '18+ websites'
  },
]

const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Services' },
  { id: 'web', name: 'Web Development' },
  { id: 'marketing', name: 'Digital Marketing' },
  { id: 'ai', name: 'AI Solutions' },
]

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [servicesRef, isServicesVisible] = useScrollAnimation(0.1)

  // Dynamically calculate category counts
  const categoriesWithCounts = useMemo(() => {
    const counts = {
      all: SERVICES_DATA.length,
      web: SERVICES_DATA.filter(s => s.category === 'web').length,
      marketing: SERVICES_DATA.filter(s => s.category === 'marketing').length,
      ai: SERVICES_DATA.filter(s => s.category === 'ai').length,
    }
    
    return CATEGORIES.map(category => ({
      ...category,
      count: counts[category.id as keyof typeof counts] || 0
    }))
  }, [])

  const filteredServices = useMemo(() => {
    return activeCategory === 'all' 
      ? SERVICES_DATA 
      : SERVICES_DATA.filter(service => service.category === activeCategory)
  }, [activeCategory])

  const getDelayClass = (index: number): string => {
    const delayMap: Record<number, string> = {
      0: 'transition-delay-100',
      1: 'transition-delay-200',
      2: 'transition-delay-300',
    }
    return delayMap[index % 3] || 'transition-delay-300'
  }

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId)
  }, [])

  const ServiceCard: React.FC<ServiceCardProps> = memo(({ service, index, isVisible }) => {
    const Icon = service.icon
    const delayClass = getDelayClass(index)
    
    // Map service titles to actual image filenames
    const getImagePath = (title: string): string | null => {
      const imageMap: Record<string, string> = {
        'Website Development': 'website-development',
        'Social Media Management': 'social-media-management',
        'Targeted Ad Campaigns': 'targeted-ad-campaigns',
        'PowerBI Dashboard Setup': 'digital-transformation',
        'AI Automation Tools': 'digital-transformation',
        'AI Marketing': 'digital-transformation',
        'Mobile App Development': 'digital-transformation',
        'SEO & Content Marketing': 'social-media-management',
      }
      return imageMap[title] || null
    }

    const imageName = getImagePath(service.title)
    
    return (
      <article
        className={`group card-hover transform-style-3d hover:shadow-professional-lg p-5 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        } ${delayClass}`}
        aria-label={`${service.title} service card`}
      >
        <header className="flex items-start justify-between mb-4">
          <div className="relative p-3 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-professional overflow-hidden">
            {imageName && (
              // eslint-disable-next-line react/forbid-dom-props
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
                style={{ backgroundImage: `url('/images/services/${imageName}.jpg')` }}
                aria-hidden="true"
              />
            )}
            <Icon className="h-6 w-6 text-blue-600 relative z-10" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-2">
            {service.popular && (
              <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold shadow-sm hover:scale-110 transition-transform duration-300">
                Popular
              </span>
            )}
            <div className="flex items-center text-yellow-500">
              <Star className="h-3 w-3 fill-current group-hover:scale-110 transition-transform duration-300" />
              <span className="ml-1 text-xs font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{service.rating}</span>
            </div>
          </div>
        </header>
        
        <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
          {service.description}
        </p>
        
        <ul className="space-y-1.5 mb-4" aria-label="Service features">
          {service.features.map((feature, idx) => (
            <li key={`${service.id}-feature-${idx}`} className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <CheckCircle className="h-3.5 w-3.5 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span className="text-xs">{feature}</span>
            </li>
          ))}
        </ul>

        <footer className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-base font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300" aria-label="Service price">
                {service.price}
              </div>
              <time className="text-xs text-gray-500 font-medium" dateTime={service.duration}>
                {service.duration}
              </time>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-gray-700" aria-label="Completed projects">
                {service.projects}
              </div>
            </div>
          </div>
          
          <Link
            to={`/contact?service=${encodeURIComponent(service.title)}`}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-professional-lg flex items-center justify-center group rounded-lg py-2 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`Get started with ${service.title}`}
          >
            Get Started
            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
          </Link>
        </footer>
      </article>
    )
  })

  ServiceCard.displayName = 'ServiceCard'

  return (
    <section 
      ref={servicesRef}
      className={`py-12 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
        isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-3 py-1.5 bg-blue-100 rounded-full mb-3 transition-all duration-700 delay-200 shadow-professional hover:shadow-professional-lg hover-lift ${
            isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Star className="h-3 w-3 text-blue-600 mr-1.5" />
            <span className="text-xs font-semibold text-blue-700">Premium Services</span>
          </div>
          <h2 
            id="services-heading"
            className={`text-2xl md:text-3xl font-bold mb-3 text-gradient-primary ${
              isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } transition-all duration-700 delay-300 hover:scale-105`}
          >
            Comprehensive Digital Solutions
          </h2>
          <p className={`text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
            isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Comprehensive Digital marketing and AI services designed to elevate your brand presence 
            and drive measurable business growth through innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <nav 
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-500 ${
            isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          aria-label="Service categories"
        >
          {categoriesWithCounts.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-professional-lg transform scale-105 hover:scale-110'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-professional hover:shadow-professional-lg'
              }`}
              aria-label={`Filter by ${category.name}`}
              aria-current={activeCategory === category.id ? 'page' : undefined}
              aria-pressed={activeCategory === category.id}
            >
              {category.name}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </nav>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              isVisible={isServicesVisible}
            />
          ))}
        </div>

        {/* CTA Section */}
        <aside className={`mt-12 text-center transition-all duration-700 delay-600 ${
          isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white transform-style-3d hover:neon-glow transition-all duration-500">
            <h3 className="text-lg md:text-xl font-bold mb-3 transform hover:scale-110 transition-transform duration-300">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xs md:text-sm text-blue-100 mb-4 max-w-2xl mx-auto transform hover:translate-z-50 transition-transform duration-300">
              Let's discuss how our comprehensive services can help you achieve your digital marketing goals and drive sustainable growth.
            </p>
            <div className="transform hover:scale-105 hover:-translate-y-1 hover:translate-z-100 transition-all duration-300">
              <LetsTalkCTA variant="secondary" size="md" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Services