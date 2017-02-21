var app=angular.module("restClient",[]);

app.controller("RestClientCtrl",RestClientCtrl);

function RestClientCtrl(){
  this.headers=[];
  this.payload="";
  this.httpMethod="";

  this.addHeader=function(){
    this.headers.push({name:'',value:''});
  }

  this.removeHeader=function(index){
    this.headers.splice(index,1);
  }

}
