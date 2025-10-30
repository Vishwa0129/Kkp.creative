import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useAnimations'

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [pricingRef, isPricingVisible] = useScrollAnimation(0.1)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      icon: Zap,
      monthlyPrice: 15000,
      annualPrice: 150000,
      features: [
        'Website Development',
        'Basic SEO Setup',
        'Social Media Management (2 platforms)',
        'Monthly Analytics Report',
        'Email Support',
        '2 Revisions Included'
      ],
      popular: false,
      color: 'blue'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      icon: Star,
      monthlyPrice: 35000,
      annualPrice: 350000,
      features: [
        'Everything in Starter',
        'Advanced SEO & Content Marketing',
        'Social Media Management (5 platforms)',
        'Targeted Ad Campaigns',
        'PowerBI Dashboard Setup',
        'Weekly Analytics Report',
        'Priority Support',
        '5 Revisions Included',
        'AI Marketing Tools'
      ],
      popular: true,
      color: 'purple'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      icon: Crown,
      monthlyPrice: 75000,
      annualPrice: 750000,
      features: [
        'Everything in Professional',
        'Custom AI Automation Tools',
        'Mobile App Development',
        'Advanced Analytics & Reporting',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Unlimited Revisions',
        'Custom Integrations',
        'White-label Solutions',
        'Training & Support'
      ],
      popular: false,
      color: 'gold'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-500 to-blue-600',
          hover: 'hover:from-blue-600 hover:to-blue-700',
          text: 'text-blue-600',
          border: 'border-blue-200',
          badge: 'bg-blue-100 text-blue-800'
        }
      case 'purple':
        return {
          bg: 'from-purple-500 to-purple-600',
          hover: 'hover:from-purple-600 hover:to-purple-700',
          text: 'text-purple-600',
          border: 'border-purple-200',
          badge: 'bg-purple-100 text-purple-800'
        }
      case 'gold':
        return {
          bg: 'from-yellow-500 to-orange-500',
          hover: 'hover:from-yellow-600 hover:to-orange-600',
          text: 'text-yellow-600',
          border: 'border-yellow-200',
          badge: 'bg-yellow-100 text-yellow-800'
        }
      default:
        return {
          bg: 'from-gray-500 to-gray-600',
          hover: 'hover:from-gray-600 hover:to-gray-700',
          text: 'text-gray-600',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-800'
        }
    }
  }

  return (
    <section 
      ref={pricingRef}
      id="pricing"
      className={`py-12 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
        isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-3 py-1.5 bg-purple-100 rounded-full mb-3 shadow-lg transition-all duration-700 delay-200 ${
            isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Star className="h-3 w-3 text-purple-600 mr-1.5" />
            <span className="text-xs font-bold text-purple-700">Flexible Pricing</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-black text-gray-900 mb-2 transition-all duration-700 delay-300 ${
            isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Choose Your Perfect Plan
          </h2>
          <p className={`text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-2 transition-all duration-700 delay-400 ${
            isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Transparent pricing with no hidden fees. Scale up or down anytime based on your business needs.
          </p>
          <p className={`text-xs md:text-sm text-gray-500 max-w-3xl mx-auto transition-all duration-700 delay-450 ${
            isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            30-day money-back guarantee. Cancel anytime. Priority onboarding for annual plans.
          </p>

          {/* Billing Toggle */}
          <div className={`flex items-center justify-center mb-8 transition-all duration-700 delay-500 ${
            isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className={`text-sm font-medium mr-3 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color)
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const savings = isAnnual ? Math.round((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12) * 100) : 0

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                } ${isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${
                  index === 0 ? 'transition-delay-100' : index === 1 ? 'transition-delay-200' : 'transition-delay-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl mb-3`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6" aria-live="polite">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">₹</span>
                      <span className="text-3xl font-bold text-gray-900">
                        {isAnnual ? Math.round(price / 12).toLocaleString() : price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-1.5 text-sm">
                        /month
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="mt-1">
                        <span className="text-xs text-gray-500 line-through">
                          ₹{(plan.monthlyPrice).toLocaleString()}/month
                        </span>
                        <span className="ml-1.5 text-green-600 font-semibold text-xs">
                          Save {savings}%
                        </span>
                        {plan.popular && (
                          <span className="ml-1.5 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-[10px] font-semibold align-middle">
                            Best value
                          </span>
                        )}
                      </div>
                    )}
                    {isAnnual && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        Billed annually (₹{plan.annualPrice.toLocaleString()})
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/contact?plan=${encodeURIComponent(plan.name)}&price=${isAnnual ? Math.round(price / 12) : price}&billing=${isAnnual ? 'annual' : 'monthly'}&utm_source=pricing&utm_medium=cta&utm_campaign=${plan.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center group text-sm ${
                      plan.popular
                        ? `bg-gradient-to-r ${colors.bg} ${colors.hover} shadow-lg hover:shadow-xl`
                        : `bg-gradient-to-r ${colors.bg} ${colors.hover}`
                    }`}
                    aria-label={`Get started with the ${plan.name} plan on ${isAnnual ? 'annual' : 'monthly'} billing`}
                    title={`Contact us about the ${plan.name} plan (${isAnnual ? 'annual' : 'monthly'})`}
                    data-plan-id={plan.id}
                    data-billing={isAnnual ? 'annual' : 'monthly'}
                    state={{ plan: plan.name, billing: isAnnual ? 'annual' : 'monthly', price: isAnnual ? Math.round(price / 12) : price }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${
          isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included in All Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Free Consultation</h4>
                <p className="text-gray-600 text-xs">Initial strategy session to understand your needs</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">30-Day Money Back</h4>
                <p className="text-gray-600 text-xs">Not satisfied? Get a full refund within 30 days</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Cancel Anytime</h4>
                <p className="text-gray-600 text-xs">No long-term contracts or cancellation fees</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={`mt-12 transition-all duration-700 delay-700 ${
          isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-xs">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-xs">We accept all major credit cards, UPI, net banking, and bank transfers.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Is there a setup fee?</h4>
              <p className="text-gray-600 text-xs">No setup fees for any plan. You only pay the monthly/annual subscription.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Do you offer custom solutions?</h4>
              <p className="text-gray-600 text-xs">Yes, we offer custom enterprise solutions. Contact us for a personalized quote.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
