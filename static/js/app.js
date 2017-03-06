var app=angular.module("restClient",[]);

app.controller("RestClientCtrl",RestClientCtrl);

function RestClientCtrl($http){
  this.headers=[];
  this.httpMethod="";
  this.requestBody="\{    \"serialNumber\" : \"string\"\,    \"deviceToken\" : \"string\"\,    \"deviceUpc\" : \"string\"  }";
  this.url="http://localhost:9096/activate";
  this.addHeader=function(){
    this.headers.push({name:'',value:''});
  }

  this.removeHeader=function(index){
    this.headers.splice(index,1);
  }

  this.sendRequest=function(){
    var length=this.headers.length;
    var httpHeaders={};
    console.log("Payload: "+this.requestBody);
    console.log("Http Method: "+this.httpMethod);
    console.log("Header Count: "+this.headers.length)
    for(i=0;i<length;i++){
      httpHeaders[this.headers[i].name]=this.headers[i].value;
      console.log(this.headers[i].name+":"+this.headers[i].value)
      //httpHeaders.push(this.headers[i].name,this.headers[i].value);
    }
    console.log("Header : " +httpHeaders);
    $http({method:this.httpMethod, url:this.url, headers:httpHeaders,data:this.requestBody}).
      then(function(response){
        console.log(response);
      },function(error){
        console.log(error);
    });
  };

}
