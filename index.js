const http = require('http');
const url = require('url');
hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res) =>
{
    res.setHeader('Content-Type', 'text/plain');
    let parsed = url.parse(req.url, true);
    let q = parsed.query;
    if (q.time && q.ID && q.vol && q.dur)
    {
        let msg = `At timestamp ${q.time}, the sensor with ID ${q.ID} recorded ${q.vol} liters of water in ${q.dur} seconds.`;
        res.write(msg);
        console.log(q);
    }
    else
    {
        res.write("HI! <3");
    }
    res.end();
    // if (req.url == '/now')
    // {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify({now: new Date() }));
    // }
    // else
    // {
    //     res.end("hello");
    // }
})


server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}`);
})