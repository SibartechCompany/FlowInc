import React from "react";

const SocialMedia = ({ children }) => {
  return (
    <div className="rounded-full p-2 bg-red-100 h-fit bg-gradient-to-t from-[#E21483] via-[#634E9B] to-[#30BDE7]">
      {children}
    </div>
  );
};

export default SocialMedia;
