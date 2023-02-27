
import './App.css';
import LoginForm from './components/LoginForm';
import MessageWindowGeneral from './components/MessageWindowGeneral';

function App() {
  return (
    <div className="flex">
      <MessageWindowGeneral />
      <LoginForm />
    </div>
  );
}

export default App;
