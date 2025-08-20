

import React from "react";
import useReveal from "./useReveal";
import "../App.css";

export default function Trust(){
  const r = useReveal();

  return (
    <section className="section">
      <div className="container reveal" ref={r}>
        <div className="card gradient-card" style={{display:"grid", gap:14}}>
          <h2 style={{fontSize:"28px"}}>Why Trust Us</h2>
          <p style={{color:"var(--muted)"}}>
            Verified profiles • Secure payments • 24/7 support • Transparent ratings
          </p>
          <img src="/src/assets/images/trust-logos.png" alt="" style={{opacity:.8, borderRadius:12}} />
        </div>
      </div>
    </section>
  );
}
