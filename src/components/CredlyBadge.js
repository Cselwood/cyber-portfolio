import { useEffect } from "react";

const CredlyBadge = () => {
  useEffect(() => {
    // Load the script if it's not already in the DOM
    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.Credly) {
          window.Credly.render();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script already exists, trigger the render
      if (window.Credly) {
        window.Credly.render();
      }
    }
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="bdd5d8d3-0c93-4c1c-961d-15e6c3c4ab77"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default CredlyBadge;
