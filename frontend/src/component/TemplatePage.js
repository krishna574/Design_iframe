export default function TemplatePage({ category }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {category} Templates
      </h1>
      <p className="text-gray-600">
        Browse our collection of {category.toLowerCase()} templates.
      </p>
      {/* Add your template grid/list here */}
    </div>
  );
}