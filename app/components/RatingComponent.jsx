export default function RatingComponent({ label, rating, handleRatingChange }) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className={`h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer 
                          ${
                            number <= rating ? "bg-orange-500" : "bg-gray-300"
                          } text-white`}
            onClick={() => handleRatingChange(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}
