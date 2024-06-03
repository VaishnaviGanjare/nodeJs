const http=require('http');

const server= http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);

    res.setHeader('content-type','text/html')

    if(req.url==='/home')
    res.write('<body>About home</body>');

    else if(req.url==='/about')
    res.write('<body>Welcome to about us page</body>');

    else if(req.url==='/node')
    res.write('<body>Welcome to my node js project</body>');

    res.end();
});
server.listen(4000);