import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ControlPanel = (props) => {
    // const [selectedLabel, setSelectedLabel] = React.useState('coose a label');
    // const [radioValue, setRadioValue] = React.useState('All');
    // const handleChange = (event) => {
    //     setSelectedLabel(event.target.value);
    // };
    // const handleRadioChange = (event) => {
    //     setRadioValue(event.target.value);
    // };

    return (

        <form className='form'>
            <div>
                <TextField id="standard-basic" label="filter by topic" onChange={props.searchHandler} />
            </div>
            {/* <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={props.selectedLabelValue}
                    onChange={props.handleLabelChange}
                    helperText="Filter by label"
                >
                    <MenuItem value='label1'>
                        label1
                        </MenuItem>
                    <MenuItem value='label2'>
                        label2
                    </MenuItem>
                    <MenuItem value='label3'>
                        label3
                </MenuItem>
                </TextField>
            </div> */}
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Show:</FormLabel>
                    <RadioGroup row aria-label="filter" name="filter1" value={props.selectedRadioValue} onChange={props.handleRadioChange}>
                        <FormControlLabel value="All" control={<Radio />} label="All" />
                        <FormControlLabel value="Solved" control={<Radio />} label="Solved" />
                        <FormControlLabel value="Unsolved" control={<Radio />} label="Unsolved" />
                    </RadioGroup>
                </FormControl>
            </div>
        </form>
    );
}

export default ControlPanel;