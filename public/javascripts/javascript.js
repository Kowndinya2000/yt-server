function fetch() 
{
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () 
  {
    if(this.readyState == 4 && this.status == 200)
    {
      var result = []; 
      result = JSON.parse(this.responseText).message;
      console.log(result)
    }      
  }
  xhttp.open("POST","/analysis",true)
  xhttp.setRequestHeader('Content-type',"application/x-www-form-urlencoded")
  var url = "https://www.youtube.com/watch?v=W1e5wO7XR2w" + "--" + "0:55" + "--" + "12:23"
  xhttp.send('link='+url)  
}
