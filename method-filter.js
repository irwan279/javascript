/*var arr = [1,2,3,4,5]
var arrganjil=[]

for (var i=0; i<arr.lenght; i++){
  if(arr[i]%2!==0){
    arrganjil.push(arr[i])
  }
}

console.log(arrganjil)*/
var arr=[1,2,3,4,5]
var arrganjil=arr.filter(function(el){
  return el%2 !==0
})
console.log(arrganjil);
