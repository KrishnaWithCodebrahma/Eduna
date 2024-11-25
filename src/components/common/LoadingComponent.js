import React, { useState, useEffect } from "react";

const LoadingComponent = ({ timeoutDuration = 1000 , setLoading , loading}) => {
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.onload = handleLoad;

    const timeout = setTimeout(() => setLoading(false), timeoutDuration);

    return () => clearTimeout(timeout);
  }, [timeoutDuration]);

  if (!loading) return null; // Render nothing when loading is false

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-violet border-solid"></div>
        <img src="/images/favicon.svg" className="absolute h-16 w-16" />
      </div>
    </div>
  );
};

export default LoadingComponent;
