import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} WeCode. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
