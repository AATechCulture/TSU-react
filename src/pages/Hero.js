import React from "react";
import '../../App.css';
import '../Hero.css';
import '../App.js';

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <h1>SKYTRACK</h1>
        <p>Track your baggage</p>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>JUST AS YOU BAGGAGES IS IMPORTANT LIKE YOU AS A TRAVELER</h1>
        <p>Track your baggage</p>
        <p>Let the journey begin</p>
        <div className = "hero.btns">

        </div>
      </div>
    </div>
  );
}