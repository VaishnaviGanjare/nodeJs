const http=require('http');
const fs=require('fs');

const server= http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

   if(url==='/'){

    fs.readFile('message.txt',{encoding: 'utf-8'}, (err, data)=>{//readfile and writefile are asynchronous functions
        if(err){
            console.log(err);
        }
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(`<body>${data}</body>`);
    res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>`);  
    res.write('</html>');
    return res.end();

    });
   }

   else if(url==='/message' && method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{//we can also return req.on it will give same result
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split('=')[1];
        
        fs.writeFile('message.txt', message, (err)=>{
            if(err)
            console.log(err);

    res.statusCode=302;
    res.setHeader('Location','/');//after reading file once we are redirecting to '/' so that user can again write req.
    return res.end();
    });
  });

 }

   else{
    res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<body>Hello from my node Js server</body>');
    res.write('</html>');
    res.end();
   }
});
server.listen(4000);