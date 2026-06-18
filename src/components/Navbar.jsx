import './Navbar.css';

export function Navbar({ onLogout }) {
  return (
    <nav className="navbar-full">
      <button className="nav-left" type="button" aria-label="Go home">
        <span className="material-symbols-outlined">NEURAL</span>
      </button>

      <div className="nav-right">
        <div className="nav-actions">
          <button className="nav-btn" type="button">
            <span className="material-symbols-outlined"> Home</span>
          </button>

          <button className="nav-btn" type="button">
            <span className="material-symbols-outlined">New Chat</span>
          </button>

          <button className="nav-btn" type="button">
            <span className="material-symbols-outlined">History</span>
          </button>

          {onLogout && (
            <button className="nav-btn logout-btn" type="button" onClick={onLogout}>
              Logout
            </button>
          )}
        </div>

        <div className="profile-wrapper" title="User Profile">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=User&backgroundColor=1F2833"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
}
