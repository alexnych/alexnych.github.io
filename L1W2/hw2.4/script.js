var hash = "#";
var agr = "";
var resh = function(){
  for(var i=14;i>6;--i){
    hash+=agr;
    console.log(hash);
    agr="#";
  }
}
resh();