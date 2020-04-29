const http = require('http');
const url = require('url');
hostname = "0.0.0.0";
const port = 3003;
const server = http.createServer((req,res) =>
{
    res.setHeader('Content-Type', 'text/plain');
    let parsed = url.parse(req.url, true);
    let q = parsed.query;
    console.log(req.url);

    if (q.time && q.ID && q.vol && q.dur)
    {
        let msg = `At timestamp ${q.time}, the sensor with ID ${q.ID} recorded ${q.vol} liters of water in ${q.dur} seconds.\n`;
        res.write(msg);
    }
    else
    {
        if (!q.time)
            res.write("invalid time\n");
        if (!q.vol)
            res.write("invalid volume\n");
        if (!q.ID)
            res.write("invalid ID\n");
        if (!q.dur)
            res.write("invalid dur\n");
    }
    res.end();
})


server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}`);
})