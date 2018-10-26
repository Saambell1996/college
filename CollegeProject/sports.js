var url =
  "https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=e7a9e149d64c4a26aa4462358d220721";

var req = new Request(url);
fetch(req).then(function(response) {
  var res = response.json();


  console.log(res);
  console.log();
});
