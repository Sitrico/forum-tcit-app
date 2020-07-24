import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addPost } from '../apiHandler'

const CreatePost = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  let handleSubmit = () => {
    addPost(name, description);
    setName('');
    setDescription('');
  }

  return (
    <div>
      <TextField value={name} onChange={e => setName(e.target.value)} label="Nombre" variant="outlined" />
      <TextField value={description} onChange={e => setDescription(e.target.value)} label="Descripción" variant="outlined" />
      <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Crear</Button>
    </div>
  )
}

export default CreatePost;