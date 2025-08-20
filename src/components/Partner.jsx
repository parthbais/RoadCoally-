import React from "react";
import useReveal from "./useReveal";
import "../App.css";

export default function Partner(){
  const r = useReveal();

  return (
    <section className="section">
      <div className="container">
        <div className="partner reveal" ref={r} style={{
          backgroundImage: "url('/src/assets/images/partner-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply"
        }}>
          <div className="card gradient-card" style={{background:"rgba(15,17,19,.65)"}}>
            <h2 style={{fontSize:"28px"}}>Become a Delivery Partner</h2>
            <p style={{color:"var(--muted)", marginTop:8}}>
              Flexible hours, instant payouts, and bonuses for peak times.
            </p>
            <div style={{marginTop:14}}>
              <a className="btn cta" href="#partner-signup">Join as Driver</a>
              <a className="btn cta secondary" href="#learn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
