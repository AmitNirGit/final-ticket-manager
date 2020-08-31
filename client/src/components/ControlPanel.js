import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import SearchIcon from '@material-ui/icons/SearchIcon';
import InputAdornment from '@material-ui/core/InputAdornment';
//import AccountCircle from '@material-ui/icons/AccountCircle';

const ControlPanel = (props) => (
  <form className='form'>
    <div className='text-field'>
      <TextField
        id='searchInput'
        label='search by topic'
        onChange={props.searchHandler}
      />
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'></link>
      <span id='search-icon' className='material-icons'>
        search
      </span>
    </div>

    <div className='label-checkbox'>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Show:</FormLabel>
        <RadioGroup
          row
          aria-label='filter'
          name='filter1'
          value={props.selectedRadioValue}
          onChange={props.handleRadioChange}>
          <FormControlLabel value='All' control={<Radio />} label='All' />
          <FormControlLabel value='Solved' control={<Radio />} label='Solved' />
          <FormControlLabel
            value='Unsolved'
            control={<Radio />}
            label='Unsolved'
          />
        </RadioGroup>
      </FormControl>
    </div>
  </form>
);

export default ControlPanel;
