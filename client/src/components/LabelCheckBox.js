import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
    const [value, setValue] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // labels = [Corvid, Api, Guidelines, Collapse, Expand, Login, Problem, Tutorial, View, Count]

    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Corvid" />
                <Tab label="Api" />
                <Tab label="Guidelines" />
            </Tabs>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Corvid" />
                <Tab label="Api" />
                <Tab label="Guidelines" />
            </Tabs>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Corvid" />
                <Tab label="Api" />
                <Tab label="Guidelines" />
            </Tabs>
        </Paper>
    );
}