import React from "react";
import "../App.css";

export default function Footer(){
  return (
    <footer className="section footer">
      <div className="container">
        <div className="cols">
          <div>
            <a href="#home" className="brand">
              <span className="brand-badge">R</span>
              <strong>RoadCoally</strong>
            </a>
            <p style={{color:"var(--muted)", marginTop:10, maxWidth:460}}>
              Fast, reliable, and secure local deliveries. Connecting communities one delivery at a time.
            </p>
          </div>

          <div>
            <h4 style={{marginBottom:10}}>Support</h4>
            <div style={{display:"grid", gap:8}}>
              <a href="#help">Help Center</a>
              <a href="#contact">Contact Us</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>

          <div>
            <h4 style={{marginBottom:10}}>Company</h4>
            <div style={{display:"grid", gap:8}}>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
            </div>
          </div>

          <div>
            <h4 style={{marginBottom:10}}>Follow</h4>
            <div style={{display:"flex", gap:10}}>
              <a className="btn cta secondary" href="#x">X</a>
              <a className="btn cta secondary" href="#ig">IG</a>
              <a className="btn cta secondary" href="#yt">YT</a>
            </div>
          </div>
        </div>

        <p style={{color:"var(--muted)", marginTop:16}}>
          © {new Date().getFullYear()} RoadCoally. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
