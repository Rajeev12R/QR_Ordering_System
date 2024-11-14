import './App.css';
import Home from '../src/pages/Home';
import loaderImg from '../src/assets/loaderImg.jpeg'
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loaderImg} alt="" srcset="" />
          <div className="bounce-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
