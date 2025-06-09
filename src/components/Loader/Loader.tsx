const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
      <p className="text-center">Loading...</p>
    </div>
  );
};

export default Loader;
