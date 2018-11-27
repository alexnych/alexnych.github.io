var arr = [1,4,2];
var a = 0;
var sum = 0;
var avarageVal = function (arr){
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
  a= sum/arr.length;
  alert(a);
}
avarageVal(arr);