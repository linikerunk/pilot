import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import AnimatedCard from '../../shared/components/AnimatedCard'
import { FaStar } from 'react-icons/fa'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
}

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Sarah Johnson',
          role: 'Senior Developer',
          company: 'Tech Corp',
          avatar: '👩‍💻',
          rating: 5,
          text: 'Amazing! It increased my productivity by 300%. The AI truly understands what I\'m trying to do.'
        },
        {
          id: 2,
          name: 'Michael Chen',
          role: 'CTO',
          company: 'StartupXYZ',
          avatar: '👨‍💼',
          rating: 5,
          text: 'Our entire team uses it. Best investment we made this year. Essential for modern development.'
        },
        {
          id: 3,
          name: 'Emily Rodriguez',
          role: 'Full Stack Developer',
          company: 'DevHouse',
          avatar: '👩‍🔬',
          rating: 5,
          text: 'Real-time code analysis saved me from countless bugs. I can\'t work without it anymore.'
        }
      ])
    }, 500)
  })
}

function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials
  })

  if (isLoading) {
    return (
      <Section className="bg-white" id="testimonials">
        <Container>
          <div className="text-center">
            <div className="animate-pulse text-gray-400">Loading testimonials...</div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section className="bg-white" id="testimonials">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied developers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <AnimatedCard key={testimonial.id} delay={index * 0.1}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default TestimonialsSection
