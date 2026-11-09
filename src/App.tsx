import './App.css';
import Header from './Header';
import Footer from './Footer';
import TaskList from './TaskList';

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
        <div className="app-container">
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
