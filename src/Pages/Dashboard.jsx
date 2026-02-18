import { Link } from 'react-router-dom';
import './Dashboard.css'; // Don't forget to import the CSS!

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome Back!</h1>
        <p className="welcome-subtitle">Ready to crush your goals today?</p>
      </div>

      {/* Grid Section */}
      <div className="dashboard-grid">
        
        {/* Card 1: Current Routine */}
        <div className="dashboard-card">
          <div className="card-icon">🔥</div>
          <h3 className="card-title">Current Routine</h3>
          <p className="card-desc">
            Jump right back into your active workout plan.
          </p>
          <Link to="/current-routine" className="action-btn btn-primary-custom">
            Start Workout
          </Link>
        </div>

        {/* Card 2: My Routines */}
        <div className="dashboard-card">
          <div className="card-icon">📚</div>
          <h3 className="card-title">My Routines</h3>
          <p className="card-desc">
            View, edit, or manage your saved workout templates.
          </p>
          <Link to="/my-routines" className="action-btn btn-outline-custom">
            View Library
          </Link>
        </div>

        {/* Card 3: Create New */}
        <div className="dashboard-card">
          <div className="card-icon">✏️</div>
          <h3 className="card-title">Create New</h3>
          <p className="card-desc">
            Build a custom routine from scratch.
          </p>
          <Link to="/create-routine" className="action-btn btn-brand-custom">
            Build Routine
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;