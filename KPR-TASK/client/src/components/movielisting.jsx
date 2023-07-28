import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
export default function Movielisting(){
  const [moviedata, setMoviedata] = useState([]);

  const getMovie = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/movies');
      setMoviedata(res.data);
    } catch (error) {
      console.error('Error in fetching', error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

 

  return (
    <>
    <div>
      <h2 style={{marginLeft:'30px'}}>List of Movies</h2>
    </div>
    <div style={{ display:'flex',flexwrap: 'wrap',justifyContent: 'space-between',width:'100%'}}> 
    {moviedata.map((movie) => (

    <CardGroup style={{marginBottom: '20px',width:'50%',paddingRight:'50px'}}>
      <Card>
        <Card.Img variant="top" src={`http://localhost:5000/uploads/${movie.image}`} alt={movie.name} width="30%"  />
        <Card.Body>
          <Card.Title><b>Name: </b>{movie.name}</Card.Title>
          <Card.Text> <b>Description:</b> {movie.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    ))}
    </div>
    </>
  );
}



