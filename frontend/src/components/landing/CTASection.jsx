import { motion } from 'framer-motion'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedButton from '../../shared/components/AnimatedButton'
import { FaRocket } from 'react-icons/fa'

function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <FaRocket className="text-6xl text-yellow-300" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Revolutionize Your Programming?
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Start for free today. No credit card required.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <AnimatedButton variant="secondary" className="text-lg">
              Start Free Now
            </AnimatedButton>
            <AnimatedButton variant="outline" className="text-lg">
              Talk to Sales
            </AnimatedButton>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-sm text-gray-200"
          >
            Cancel anytime • 24/7 Support • 30-day Money-back Guarantee
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  )
}

export default CTASection
