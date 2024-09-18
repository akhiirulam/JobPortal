import React, { useState } from "react";

const ReviewsSection = () => {
  // State to hold the reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Admin",
      date: "March 27, 2021",
      rating: 4.0,
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    // Add more review objects here
  ]);

  // State to handle form inputs
  const [newReview, setNewReview] = useState({
    author: "",
    rating: "",
    reviewText: ""
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.author && newReview.rating && newReview.reviewText) {
      const reviewToAdd = {
        id: reviews.length + 1, // Simplified ID generation
        author: newReview.author,
        date: new Date().toLocaleDateString(),
        rating: parseFloat(newReview.rating),
        reviewText: newReview.reviewText
      };

      // Update reviews state with new review
      setReviews([reviewToAdd, ...reviews]);

      // Reset form
      setNewReview({
        author: "",
        rating: "",
        reviewText: ""
      });
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

      {/* Reviews List */}
      <div className="mb-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="mb-4">
              <h3 className="font-semibold">{review.author}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="text-yellow-500">{`⭐ ${review.rating}`}</p>
              <p className="text-gray-700">{review.reviewText}</p>
              <hr className="my-2" />
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Write a Review Form */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="font-semibold mb-2">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="author"
              value={newReview.author}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating (0 to 5)</label>
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Review</label>
            <textarea
              name="reviewText"
              value={newReview.reviewText}
              onChange={handleInputChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewsSection;
