import "./App.css";
import Logo from './assets/chai_culture_logo.png'
import { Instagram, Facebook, X } from "lucide-react";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you somuch ! We'll notify you when we launch");
  };

  return (
    <div className="wrapper">
      <div className="content">
        <img src={Logo} alt="Chai Culture Logo" className="logo" />

        <h1 className="headline">
          Brew the <span>Royal</span><br />Tradition
        </h1>

        <p className="subtext">
          Premium instant chai tea premix inspired by the royal Indian
          households. Experience centuries of tradition in every sip.
        </p>

        <div className="pill">● LAUNCHING SOON</div>


        <p className="cta-text">
          Be the first to experience our royal blend
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">NOTIFY ME</button>
        </form>
        <div className="footer">
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>

            <a href="#" aria-label="X">
              <X size={20} />
            </a>

            <a href="#" className="facebook" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
          <p className="copyright">
            © 2026 Chai Culture. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
