export default function Header() {
  return (
    <header className="app-header">
      <div className="header-top">
        <h1 className="app-title">საქმეების სია</h1>
      </div>
      <div className="search-bar-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-bar"
          placeholder="მოძებნე დავალება..."
        />
      </div>
    </header>
  );
}

