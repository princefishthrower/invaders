import React from 'react';
import './styles.scss';

export function FullStackCraftProductionLabel() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap"
        rel="stylesheet"
      />
      <a
        className="full-stack-craft-button"
        target="_blank"
        rel="noopener noreferrer"
        href="https://fullstackcraft.com"
      >
        <img alt="Full Stack Craft Logo" src="https://coffee-app.sfo2.cdn.digitaloceanspaces.com/fullstackcraft/logo.jpg" />
        <span>A Full Stack Craft Production</span>
      </a>
    </>
  );
}
