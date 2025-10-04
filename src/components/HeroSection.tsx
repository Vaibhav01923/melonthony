export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-8 rounded-lg mb-8 border border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
          Melonthany
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Explore a curated collection of albums from various artists and
          <p>
            Read Through{" "}
            <span className="font-bold text-red-500">unbiased</span> reviews
            given by the community.
          </p>
        </p>
        <div className="flex justify-center">
          <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600">
            <p className="text-lg font-medium text-gray-200">
              Inspired by Mr Anthony Fantano and Melondy.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
