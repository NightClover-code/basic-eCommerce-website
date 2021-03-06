//importing styles
import '../../styles/css/default.css';
//importing components
import Homepage from '../../pages/Homepage';
import Header from '../Header';
//app component
const App: React.FC = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="wrapper">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
