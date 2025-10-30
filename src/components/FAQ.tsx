import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useAnimations'

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [faqRef, isFaqVisible] = useScrollAnimation(0.1)

  const faqs = [
    {
      id: 1,
      question: "What services does KKP IT Solutions offer?",
      answer: "We offer comprehensive digital solutions including website development, social media management, targeted ad campaigns, PowerBI dashboard setup, AI automation tools, AI marketing, mobile app development, and SEO & content marketing. Our services are designed to help businesses grow their digital presence and drive measurable results."
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. Website development typically takes 2-4 weeks, mobile app development takes 6-8 weeks, PowerBI dashboards take 3-5 weeks, and AI automation tools take 4-6 weeks. Ongoing services like social media management and SEO start immediately. We provide detailed timelines during our initial consultation."
    },
    {
      id: 3,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive support packages. All our plans include email support, and higher tiers include priority support and dedicated account managers. We also provide maintenance services, updates, and optimization to ensure your digital solutions continue to perform optimally."
    },
    {
      id: 4,
      question: "What makes KKP IT Solutions different from competitors?",
      answer: "Our unique approach combines strategic precision with innovative thinking. We focus on AI-powered solutions, provide transparent pricing with no hidden fees, offer 100% client satisfaction guarantee, and maintain 24/7 support availability. Our team has 5+ years of experience with a 4.9/5 client rating."
    },
    {
      id: 5,
      question: "Can you work with our existing systems and tools?",
      answer: "Absolutely! We specialize in integrating with existing systems and tools. Whether you're using specific CRM platforms, analytics tools, or other business software, we ensure seamless integration and compatibility with your current workflow."
    },
    {
      id: 6,
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing plans starting from ₹15,000/month for our Starter plan, ₹35,000/month for Professional, and ₹75,000/month for Enterprise. We also provide custom quotes for specific projects. Annual plans offer 20% savings, and we have a 30-day money-back guarantee."
    },
    {
      id: 7,
      question: "Do you offer AI-powered solutions?",
      answer: "Yes, AI is a core part of our service offerings. We provide AI automation tools, AI marketing solutions, AI chatbots, AI analytics, and AI-powered content creation. Our team stays updated with the latest AI technologies to deliver cutting-edge solutions for our clients."
    },
    {
      id: 8,
      question: "How do you measure success and ROI?",
      answer: "We use comprehensive analytics and reporting tools to track key performance indicators (KPIs) including website traffic, conversion rates, social media engagement, ad performance, and business growth metrics. We provide detailed monthly reports and work with you to set and achieve measurable goals."
    },
    {
      id: 9,
      question: "What industries do you serve?",
      answer: "We serve clients across various industries including healthcare, education, manufacturing, retail, technology, finance, and more. Our solutions are adaptable to different business models and industry requirements. We have experience working with startups, SMEs, and large enterprises."
    },
    {
      id: 10,
      question: "How can I get started with KKP IT Solutions?",
      answer: "Getting started is easy! Simply contact us through our website form, email us at Vishwateja0129@gmail.com, or call us at +91 8985521642. We'll schedule a free consultation to understand your needs and provide a customized proposal. Most projects begin within 1 week of contract signing."
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section 
      ref={faqRef}
      className={`py-20 bg-gradient-to-br from-white to-gray-50 transition-all duration-1000 ${
        isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4 transition-all duration-700 delay-200 ${
            isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <HelpCircle className="h-4 w-4 text-orange-600 mr-2" />
            <span className="text-sm font-semibold text-orange-700">FAQ</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-300 ${
            isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
            isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Find answers to common questions about our services, pricing, and process. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } ${index === 0 ? 'transition-delay-100' : index === 1 ? 'transition-delay-200' : 'transition-delay-300'}`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-600 ${
          isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Vishwateja0129@gmail.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+918985521642"
                className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
