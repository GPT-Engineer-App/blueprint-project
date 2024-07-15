const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
      <p className="text-xl mb-8">
        This is a bare-bones application that you can modify and build upon.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ul className="list-disc list-inside text-left">
          <li>Edit the content in <code>src/pages/HomePage.jsx</code></li>
          <li>Add new pages in the <code>src/pages</code> directory</li>
          <li>Update navigation in <code>src/components/Navbar.jsx</code></li>
          <li>Modify the layout in <code>src/layouts/Layout.jsx</code></li>
          <li>Customize styles using Tailwind CSS classes</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;