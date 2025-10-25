import { motion } from 'framer-motion'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedCard from '../../shared/components/AnimatedCard'
import AnimatedButton from '../../shared/components/AnimatedButton'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    features: [
      'Unlimited projects',
      'Basic support',
      '5 GB storage',
      'Community access'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    features: [
      'Everything in Free',
      'Advanced AI',
      '50 GB storage',
      'Priority support',
      'Code analysis',
      'Team collaboration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    features: [
      'Everything in Pro',
      'Custom AI',
      'Unlimited storage',
      '24/7 support',
      'Guaranteed SLA',
      'Advanced security',
      'Dedicated training'
    ],
    popular: false
  }
]

function PricingSection() {
  return (
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white" id="pricing">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for you or your team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className={`relative ${plan.popular ? 'border-4 border-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </AnimatedButton>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default PricingSection
