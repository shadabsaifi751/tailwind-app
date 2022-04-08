import React, { useState, useEffect } from "react";
import './App.css';
import Card from "./components/Card";
import ImageSearch from "./components/ImageSearch"
import axios from 'axios';
import LoadingSpinner from "./components/spiner";
function App() {
  const [images, setImages] = useState([]);
  const [isloader, setIsLoader] = useState(true);
  const [error, setError] = useState();
  const [term, setTrem] = useState(false);


  

  // useEffect(() => {
  //   fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data.hits);
  //       setIsLoader(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // }, [term]);

  useEffect(() => {
    const loadpost = async () => {

      const response = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      setImages(response.data.hits)

      setIsLoader(false)
      .catch((err) => {
        setError(err);
      });
    }
    loadpost();
  })
  if (error || !Array.isArray(images)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <div className="container mx-auto">
      <ImageSearch  searchtext={(view) => setTrem(view)} />

      {!isloader && images.length === 0 && <h1 className="text-5xl text-purple-900 mt-32 flex items-center justify-center mx-auto">Not image found</h1>}
      {isloader ? <h1 className="text-6xl text-purple-900 mt-32 flex items-center justify-center mx-auto"><LoadingSpinner/></h1> :<ul className="grid grid-cols-3 gap-10 py-20 justify-center mx-auto">
        {
          images.map((item) => (
            <li key={item.id}><Card  item={item} /></li>
          ))
        }
      </ul>}
    </div>
  );
}

export default App;
