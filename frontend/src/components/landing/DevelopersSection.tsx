import { motion } from 'framer-motion'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

interface Developer {
  image: string
  name: string
  role: string
  quote: string
}

interface WorkspaceImage {
  image: string
  title: string
}

// Create image of each developer profile
const developers: Developer[] = [
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    quote: 'This tool has transformed how I write code'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    name: 'Marcus Johnson',
    role: 'Backend Engineer',
    quote: 'Incredible productivity boost for my team'
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    name: 'Emma Rodriguez',
    role: 'Frontend Developer',
    quote: 'AI-powered coding at its finest'
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    name: 'David Kim',
    role: 'DevOps Engineer',
    quote: 'Streamlined our entire development process'
  }
]

const workspaceImages: WorkspaceImage[] = [
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
    title: 'Collaborative Environment'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    title: 'Team Synergy'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    title: 'Innovation Hub'
  }
]

function DevelopersSection() {
  return (
    <Section className="bg-white" id="developers">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers who are building the future with our tools
          </p>
        </motion.div>

        {/* Developer Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 inline-block">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{dev.name}</h3>
              <p className="text-sm text-purple-600 font-semibold mb-2">{dev.role}</p>
              <p className="text-gray-600 italic text-sm">"{dev.quote}"</p>
            </motion.div>
          ))}
        </div>

        {/* Workspace Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Where Innovation Happens
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {workspaceImages.map((workspace, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={workspace.image}
                alt={workspace.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-bold text-xl p-6">{workspace.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
            <p className="text-gray-600">Active Developers</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
            <p className="text-gray-600">Countries</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-purple-600 mb-2">99%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default DevelopersSection
