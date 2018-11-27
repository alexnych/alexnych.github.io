var arr = [1,23,-5,11];
alert("Масив з чисел:"+arr);
var maxValue = 0;
var minValu = 0;
var funcMax = function (arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      maxValue = arr[i];
    }
  }
  alert("Максимальне число:"+maxValue);
  return maxValue;
}
var funcMin = function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]<<arr[i+1]){
      minValue = arr[i];
    } 
  }  
  alert("Мінімальне число:"+minValue);
  return minValue;
}
funcMax(arr);
funcMin(arr);