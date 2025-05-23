import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-7xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={handleBack}
        className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
      >
        ⬅ Back to Home
      </button>
    </section>
  );
};

export default ErrorPage;
