function Header({ setSidebarOpen }) {
  return (
    <nav className="w-screen h-14 bg-gradient-to-l from-blue-500 to-purple-500 text-white flex items-center justify-between px-4">
      {/* Navigation (Desktop Only) */}

      <div>
        <h1 className="font-bold text-2xl ">Progress Tracker</h1>
      </div>
      <ul className="md:flex space-x-5 hidden">
        <li>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              style={{ fontSize: "1em", verticalAlign: "middle" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square-more-icon lucide-message-square-more"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M8 10h.01" />
              <path d="M12 10h.01" />
              <path d="M16 10h.01" />
            </svg>
            Chat
          </div>{" "}
        </li>
        <li>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              style={{ fontSize: "1em", verticalAlign: "middle" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-column-icon lucide-chart-column"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            Dashboard
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                style={{ fontSize: "1em", verticalAlign: "middle" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-git-pull-request-icon lucide-git-pull-request"
              >
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                <line x1="6" x2="6" y1="9" y2="21" />
              </svg>
            </span>
            GitHub
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bug-icon lucide-bug"
              >
                <path d="m8 2 1.88 1.88" />
                <path d="M14.12 3.88 16 2" />
                <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
                <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
                <path d="M12 20v-9" />
                <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
                <path d="M6 13H2" />
                <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
                <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                <path d="M22 13h-4" />
                <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
              </svg>
            </span>
            Jira
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users-icon lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </span>
            Team
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              style={{ fontSize: "1em", verticalAlign: "middle" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-icon lucide-calendar"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            Reports
          </div>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button className="block md:hidden" onClick={() => setSidebarOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-panel-left-icon lucide-panel-left"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
        </svg>
      </button>
    </nav>
  );
}

export default Header;
