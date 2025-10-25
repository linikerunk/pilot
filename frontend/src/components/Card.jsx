function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          {title}
        </h3>
      )}
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  )
}

export default Card
