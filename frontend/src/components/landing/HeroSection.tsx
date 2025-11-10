import { motion } from 'framer-motion'
import { useState } from 'react'
import { DatePicker, TimePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedButton from '../../shared/components/AnimatedButton'
import { FaRocket, FaCalendarAlt, FaCheck, FaClock } from 'react-icons/fa'
import 'antd/dist/reset.css'
import './HeroSection.css'

function HeroSection() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null)

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
              <span className="text-sm font-semibold">Schedule Classes 2025</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Schedule Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Classes Easily
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              The easiest way for teachers and students to manage and schedule classes.
              Book your next class with us today.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Date Picker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative inline-block group">
                  {/* Animated glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-2xl blur-xl opacity-50"
                  />

                  {/* Main date picker container */}
                  <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-lg border-2 border-white/50 rounded-2xl px-6 py-4 shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaCalendarAlt className="text-purple-600 text-2xl" />
                    </motion.div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                        Select Date
                      </span>
                      <DatePicker
                        value={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        size="large"
                        placeholder="Choose your class date"
                        className="custom-datepicker"
                        style={{
                          width: '250px',
                          border: 'none',
                          background: 'transparent',
                        }}
                        suffixIcon={
                          selectedDate ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              <FaCheck className="text-green-500" />
                            </motion.div>
                          ) : null
                        }
                      />
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: '-10px',
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Time Picker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative inline-block group">
                  {/* Animated glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-2xl blur-xl opacity-50"
                  />

                  {/* Main time picker container */}
                  <div className="relative flex items-center gap-4 bg-white/95 backdrop-blur-lg border-2 border-white/50 rounded-2xl px-6 py-4 shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <FaClock className="text-cyan-600 text-2xl" />
                    </motion.div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">
                        Select Time
                      </span>
                      <TimePicker
                        value={selectedTime}
                        onChange={(time) => setSelectedTime(time)}
                        size="large"
                        format="HH:mm"
                        placeholder="Choose class hour"
                        className="custom-timepicker"
                        style={{
                          width: '200px',
                          border: 'none',
                          background: 'transparent',
                        }}
                        minuteStep={15}
                        showNow={false}
                        suffixIcon={
                          selectedTime ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              <FaCheck className="text-green-500" />
                            </motion.div>
                          ) : null
                        }
                      />
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-300 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: '-10px',
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3 + 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#calendar">
                <AnimatedButton variant="secondary">
                  Schedule a Class
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
                <span className="font-bold">+5,000</span> students already enrolled
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
                src="/assets/imgs/test-karl.jpg"
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
