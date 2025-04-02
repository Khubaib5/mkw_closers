"use client";

import React, { useEffect } from "react";

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src="//embed.typeform.com/next/embed.js"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return (
    
      <div
        data-tf-live="01JQTTXS07TMKTYPV1MDM0064V"
        id="contact"
        style={{
          backgroundColor: 'transparent',
          margin: '0 auto',
          width: "75%",
          display: 'flex',
          marginBottom: '4%',
          justifyContent: 'center',
        }}
      ></div>
   
  );
};

export default TypeformEmbed;