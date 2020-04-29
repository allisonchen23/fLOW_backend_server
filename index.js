const http = require('http');
const url = require('url');
hostname = "0.0.0.0";
const port = 3003;
const server = http.createServer((req,res) =>
{
    res.setHeader('Content-Type', 'text/plain');
    let parsed = url.parse(req.url, true);
    let q = parsed.query;
    date = new Date();

    if (q.time && q.ID && q.vol && q.dur)
    {
        let msg = `At timestamp ${q.time}, the sensor with ID ${q.ID} recorded ${q.vol} liters of water in ${q.dur} seconds.\n`;
        res.write(msg);
        console.log(date + ": " + msg);
    }
    else
    {
        log_msg = date;
        if (!q.time)
        {
            res.write("invalid time\n");
            log_msg += " invalid time";
        }
        if (!q.vol)
        {
            res.write("invalid volume\n");
            log_msg += " invalid volume";
        }
        if (!q.ID)
        {
            res.write("invalid ID\n");
            log_msg += " invalid ID";
        }
        if (!q.dur)
        {
            res.write("invalid dur\n");
            log_msg += " invalid duration";
        }
        console.log(log_msg);
    }
    res.end();
})


server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}`);
})