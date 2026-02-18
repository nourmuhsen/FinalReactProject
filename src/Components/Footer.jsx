import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top border-primary">
      <div className="container text-center text-md-start">
        <div className="row flex-wrap">

          {/* Column 1: About */}
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">GymTracker</h5>
            <p className="small">
              Empowering youth through health and critical thinking. Build your routine, track your progress, and crush your goals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Links</h5>
            <p><Link to="/" className="text-white text-decoration-none small">Dashboard</Link></p>
            <p><Link to="/my-routines" className="text-white text-decoration-none small">My Library</Link></p>
            <p><Link to="/support" className="text-white text-decoration-none small">Support Us</Link></p>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contact</h5>
            <p className="small">📍 Amman, Jordan</p>
            <p className="small">✉️ support@gymtracker.com</p>

            {/* LinkedIn Link Added Here */}
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/nour-muhsen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
                style={{ fontSize: '0.85rem' }}
              >
                Connect on LinkedIn 🔗
              </a>
            </div>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="small text-center text-md-start">
              © 2026 Copyright: <strong>GymTracker Project</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;