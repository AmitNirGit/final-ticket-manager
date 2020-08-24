import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const ControlPanel = (props) => {
    const [selectedLabel, setSelectedLabel] = React.useState('coose a label');
    const handleChange = (event) => {
        setSelectedLabel(event.target.value);
    };

    return (

        <form className='form'>
            <TextField id="standard-basic" label="filter by topic" onChange={props.searchHandler} />
            <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={selectedLabel}
                    onChange={handleChange}
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
            </div>
        </form>
    );
}

export default ControlPanel;