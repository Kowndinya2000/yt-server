var express = require('express');
var router = express.Router();
let {PythonShell} = require('python-shell')
let pyshell = new PythonShell('ocr.py')
router.post('/', function(req, res, next) {
  req.header('Access-Control-Allow-Origin', '*')
  var url = req.body.link.split("--")[0];
  var timeStamp = req.body.link.split("--")[1]
  var t1 = parseInt(timeStamp.split(":")[0])
  var t2 = parseInt(timeStamp.split(":")[1])
  t1 = (t1*60.0) + t2
  var timeLength = req.body.link.split("--")[2]
  var a1 = parseInt(timeLength.split(":")[0])
  var a2 = parseInt(timeLength.split(":")[1])
  a1 = (a1*60.0) + a2 
  pyshell.send(url+"--"+t1+"--"+a1)
  pyshell.on('message',function(message){
    console.log(message)
  })
  
  pyshell.end(function (err,code,signal) {
    if(err) throw err 
    console.log('The exit code was: '+ code)
    console.log('The exit signal was: '+signal)
    console.log('finished')    
    res.json({message: "Done Reading!"})
  })
  
});

module.exports = router;
/*
const {spawn} = require('child_process')
  const python = spawn('python3',['ocr.py',url,t1,a1])
  python.stdout.on('data',function (data) {
       console.log('Pipe data from python script...') 
       dataToSend = data.toString()
  })
  python.on('close',(code)=>{
    console.log(`child process close all stdio with code ${code}`)
    res.send({message: dataToSend})
  })
  python.stdin.write('https://www.youtube.com/watch?v=AVQpGI6Tq0o');
  python.stdin.end();
*/
