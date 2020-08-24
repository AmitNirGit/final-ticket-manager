const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/tickets', async (req, res) => {
    let dataFile = await fs.readFile('./data.json',)
    dataFile = JSON.parse(dataFile);
    res.send(dataFile);
});

app.get('/api/tickets/:filterInput', async (req, res) => {
    let dataFile = await fs.readFile('./data.json',)
    dataFile = JSON.parse(dataFile);
    let filteredTickets = dataFile.filter(
        (ticket) => {
            return ticket.title.toLowerCase().indexOf(req.params.filterInput.toLowerCase()) !== -1;

        });
    res.send(filteredTickets);
});


app.post('/api/tickets/:ticketId/done', async (req, res) => {
    let dataFile = await fs.readFile('./data.json',)
    dataFile = JSON.parse(dataFile);
    for (const i in dataFile) {
        if (dataFile[i].id === req.params.ticketId) {
            dataFile[i].done = true;
            break;
        }
    }
    await fs.writeFile('./data.json', JSON.stringify(dataFile));
    res.send(req.params.ticketId + 'ticket is assinged as solved')
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
    let dataFile = await fs.readFile('./data.json',)
    dataFile = JSON.parse(dataFile);
    for (const i in dataFile) {
        if (dataFile[i].id === req.params.ticketId) {
            dataFile[i].done = false;
            break;
        }
    }
    await fs.writeFile('./data.json', JSON.stringify(dataFile));
    res.send(req.params.ticketId + 'ticket is assinged as unsolved');

});






app.listen(8080);
module.exports = app;