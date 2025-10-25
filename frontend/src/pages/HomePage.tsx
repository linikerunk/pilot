import Button from '../components/Button'
import Card from '../components/Card'

function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Pilot
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern frontend with Tailwind CSS, components, and pages
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card title="Fast Development">
            Built with Vite for lightning-fast hot module replacement and build times.
          </Card>
          <Card title="Tailwind CSS">
            Utility-first CSS framework for rapidly building custom designs.
          </Card>
          <Card title="Component Based">
            Reusable components for consistent and maintainable code.
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomePage
