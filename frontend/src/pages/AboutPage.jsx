import Card from '../components/Card'

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Pilot
        </h1>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">What is Pilot?</h2>
          <p className="mb-4">
            Pilot is a modern frontend application built with React, Vite, and Tailwind CSS.
            It provides a solid foundation for building scalable web applications with a
            component-based architecture.
          </p>
          <p>
            The project structure includes organized components and pages, making it easy to
            maintain and extend your application as it grows.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>React 18</strong> - Modern UI library with hooks</li>
            <li><strong>Vite</strong> - Next generation frontend tooling</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
            <li><strong>React Router</strong> - Client-side routing</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage
