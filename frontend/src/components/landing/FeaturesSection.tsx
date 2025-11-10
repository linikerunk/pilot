import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedCard from '../../shared/components/AnimatedCard'
import { FaBriefcase, FaMicrophone, FaHeadphones, FaComments, FaPen, FaGraduationCap } from 'react-icons/fa'

interface Feature {
  icon: IconType
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: FaBriefcase,
    title: 'Business English',
    description: 'Communication strategies for meetings, presentations, and negotiations.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FaMicrophone,
    title: 'Pronunciation & Accent Training',
    description: 'Clear, confident speech with natural rhythm and tone.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FaHeadphones,
    title: 'Listening & Comprehension Practice',
    description: 'Understanding native speakers and fast dialogue.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FaComments,
    title: 'Speaking Fluency Sessions',
    description: 'Building confidence through real conversation and feedback.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaPen,
    title: 'Writing & Grammar Refinement',
    description: 'Crafting professional and accurate written English.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: FaGraduationCap,
    title: 'Exam Preparation',
    description: 'Focused training for TOEFL, IELTS, and Cambridge-style tests.',
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
            English Learning Methods We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive English training tailored to your goals
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

        {/* English Learning in Action Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students learning English together"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Personalized Learning Experience
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our experienced teachers understand your learning journey and adapt their methods to help you achieve fluency faster and with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">One-on-one sessions tailored to your level and goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Flexible scheduling to fit your busy lifestyle</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Progress tracking and regular feedback sessions</p>
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
