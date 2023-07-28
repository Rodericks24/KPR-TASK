import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddMovie(){
const [moviename, setMoviename] = useState('');
const [movieid, setMovieid] = useState('');
const [img, setImg] = useState('');
const [description, setDescription] = useState('');

const handleImageChange = (e) => {
  setImg(e.target.files[0]);
};

const addMovie = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('id', movieid);
  formData.append('name', moviename);
  formData.append('description', description);
  formData.append('image', img);

  try {
    await axios.post('http://localhost:5000/api/movies', formData);
    setMovieid('');
    setMoviename('');
    setDescription('');
    setImg('');
    alert("Movie added successfully")
  } catch (error) {
    console.error('Error adding movie:', error);
  }
};

  return(<>

    <div className="form-div" style={{backgroundImage: 'linear-gradient(#7474BF, #348AC7)',width:'100%',height:'100vh',marginTop:'-30px'}}>
    <br/><h1 style= {{textAlign:'center'}}>Movie Adding</h1>
    <Card  style={{ width: "55%",margin: '0 auto',padding: '20px',backgroundColor: '#88CA5E'}}>
   <Form onSubmit={addMovie}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ID:</Form.Label>
        <Form.Control type="text" placeholder="id"  id="id" value={movieid} onChange={(e) => setMovieid(e.target.value)} required />
      </Form.Group><br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="name" id="name" value={moviename} onChange={(e) => setMoviename(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3}  id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image:</Form.Label>
        <Form.Control type="file" id="image" onChange={handleImageChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    </div>
   
  </>)
}


