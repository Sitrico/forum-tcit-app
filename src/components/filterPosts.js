import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { actionFilterPosts } from '../actions'

const FilterPosts = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  let handleSubmit = () => {
    dispatch(actionFilterPosts(filter));
    //setFilter('');
  }

  return (
    <div>
      <TextField value={filter} onChange={e => setFilter(e.target.value)} label="Filtro de nombre" variant="outlined" />
      <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Buscar</Button>
    </div>
  )
}

export default FilterPosts;