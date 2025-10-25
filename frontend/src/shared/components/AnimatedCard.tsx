import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
