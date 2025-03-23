const loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-15 h-15 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default loading;
