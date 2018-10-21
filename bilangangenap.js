function panggilbilangangenap() {
  var bilangan = []
  for (var i = 1; i < 10; i++)
    {
    if (i%2 !== 0){
      bilangan.push(i)
    }
  }
  return bilangan
}
console.log(panggilbilangangenap());
