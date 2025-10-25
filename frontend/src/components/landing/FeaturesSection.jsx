import { motion } from 'framer-motion'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedCard from '../../shared/components/AnimatedCard'
import { FaBrain, FaBolt, FaShieldAlt, FaUsers, FaCode, FaChartLine } from 'react-icons/fa'

const features = [
  {
    icon: FaBrain,
    title: 'AI Powered',
    description: 'Intelligent autocomplete with AI that understands your code',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FaBolt,
    title: 'Lightning Fast',
    description: 'Optimized performance for projects of any size',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure',
    description: 'Real-time security analysis of your code',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FaUsers,
    title: 'Collaborative',
    description: 'Work as a team with real-time synchronization',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaCode,
    title: 'Multi-Language',
    description: 'Support for 50+ programming languages',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: FaChartLine,
    title: 'Analytics',
    description: 'Productivity metrics and code quality insights',
    color: 'from-indigo-500 to-purple-500'
  }
]

function FeaturesSection() {
  return (
    <Section className="bg-gray-50" id="features">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to develop world-class software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        {/* Developer in Action Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
                alt="Developer coding on laptop"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Built by Developers, for Developers
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand your workflow because we live it every day. Our tools are designed to enhance your productivity without getting in your way.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Seamless integration with your existing tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Customizable to match your coding style</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Regular updates based on community feedback</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default FeaturesSection
