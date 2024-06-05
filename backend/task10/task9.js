//commitId: 202400971fad4817c86ee4029c91e76282e0a75a
const http=require('http');
const routes=require('./routes');

console.log(routes.someText);
const server= http.createServer(routes.handler);
server.listen(4000);