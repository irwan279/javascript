function panggilperintahmap() {
  var datakota = ['jakarta','balikpapan','medan'];
  datakota.map(function(item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilperintahmap();
