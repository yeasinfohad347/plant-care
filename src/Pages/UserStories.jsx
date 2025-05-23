import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserStories = () => {
  const [stories, setStories] = useState([]);

  // Fetch stories from DB
  useEffect(() => {
    fetch("http://localhost:3000/userFeedback")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newStory = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/userFeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStory),
    })
      .then(() => fetch("http://localhost:3000/userFeedback"))
      .then((res) => res.json())
      .then((updatedStories) => {
        setStories(updatedStories);
        form.reset();
      });
  };

  // Slick slider settings
  const settings = {
    dots: true,
    arrows: false,           // remove navigation arrows
    infinite: true,
    speed: 500,
    autoplay: true,          // enable autoplay
    autoplaySpeed: 3000,     // change every 3s
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="my-16 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">🌿 User Stories</h2>
      <p className="text-gray-600 mb-10">Discover how others use our app.</p>

      <Slider {...settings} className="!py-6">
        {stories.map((user, index) => (
          <div key={index} className="px-2">
            <div className="bg-white m-6 p-6 rounded-2xl shadow-md h-full flex flex-col justify-start items-center text-left min-h-[300px]">
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{user.name}</h3>
              <p className="text-gray-700 mt-3 text-sm">{user.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="mt-16 text-left max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">✍️ Share Your Story</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="w-full p-3 border rounded-xl"
          />
          <textarea
            placeholder="Your Story"
            name="feedback"
            className="w-full p-3 border rounded-xl"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
          >
            Submit Story
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserStories;
