import { motion } from 'framer-motion'

function AnimatedButton({ children, variant = 'primary', onClick, className = '' }) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
