import '../App.css'
import Header from "../Components/Header"; 
import Footer from '../Components/Footer'
import Home from './Home'
import Bag from './Bag';
import FetchItems from '../Components/FetchItems';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

function App() {
  const fetchStatus = useSelector((state) => state.fetchingReducer);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FetchItems />

      {/* Conditional rendering for loading */}
      {fetchStatus.currentlyFetching ? (
        <div className="flex justify-center mt-20">
          <LoadingSpinner />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bag" element={<Bag />} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
