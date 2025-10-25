import { motion } from 'framer-motion'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedButton from '../../shared/components/AnimatedButton'
import { FaCode, FaRocket } from 'react-icons/fa'

function HeroSection() {
  return (
    <Section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white min-h-screen flex items-center">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <FaRocket className="text-yellow-300" />
              <span className="text-sm font-semibold">Special Launch 2025</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revolutionize Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Programming
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              The most advanced development software on the market.
              Increase your productivity by 10x with integrated AI.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#features">
                <AnimatedButton variant="secondary">
                  Watch Your Projects
                </AnimatedButton>
              </a>
              <a href="#developers">
                <AnimatedButton variant="outline">
                  Reach Out Our Team
                </AnimatedButton>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold">+10,000</span> developers already using it
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team of developers collaborating"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-50"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-50"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection
