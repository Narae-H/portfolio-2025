export default function Loading() {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <p className="text-lg mb-6">Loading...</p>
      <div className="flex items-center justify-center w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}