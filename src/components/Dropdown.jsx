import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = () => {
    const [quiz, setQuiz] = React.useState('');

    const handleChange = (event) => {
      setQuiz(event.target.value);
    };
  return (
    <div>
          <Box sx={{ minWidth: 90 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quiz</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quiz}
          label="Quiz"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default Dropdown