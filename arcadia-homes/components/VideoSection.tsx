import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('your-video-background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Video Player */}
      <div className="relative z-10 flex justify-center items-center h-screen">
        <video
          className="w-full max-w-screen-lg h-auto"
          controls
          src="your-video.mp4"
        ></video>
      </div>

      {/* Typography Text */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black bg-opacity-50 text-white text-center">
        <h2 className="text-lg font-bold">Your Video Title</h2>
        <p className="mt-2">Description or any other text here...</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
