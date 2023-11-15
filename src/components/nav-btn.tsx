import React from "react";

interface NavButtonProps {
  content: string;
}

const NavButton: React.FC<NavButtonProps> = ({ content }) => {
  return (
    <button className="bg-transparent border-transparent">{content}</button>
  );
};

export default NavButton;
