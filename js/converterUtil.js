function csvJSON(csv){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
	  var obj = {};
	  var currentline=lines[i].split(",");
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
	  result.push(obj);
  }  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}


function sendRequest ( url,  successCallback, errorCalback){  
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.setRequestHeader("Content-Type","application/json");
  request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
          if(request.status == 200){
              successCallback(request.responseText)
          }else{
              errorCalback(request.responseText)
          }
      }
  }
  request.send({});
}

function init (){
  sendRequest('http://www.google.com/finance/historical?q=BVMF:CSNA3&output=csv',
    function(result){
       //console.log(csvJSON(result));
    },
    function(result){
      //console.log('Error: ' + result )
  });  
}

