var url =
  "https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=e7a9e149d64c4a26aa4462358d220721";

var req = new Request(url);
fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    console.log(res);
    document.getElementById("stadium_name").innerHTML = (res.articles[0].title);
    document.getElementById("stadium_description").innerHTML = (res.articles[0].content);

    document.getElementById("stadium_name2").innerHTML = (res.articles[1].title);
    document.getElementById("stadium_description2").innerHTML = (res.articles[1].content);

    document.getElementById("stadium_name3").innerHTML = (res.articles[2].title);
    document.getElementById("stadium_description3").innerHTML = (res.articles[2].content);

    document.getElementById("stadium_name4").innerHTML = (res.articles[3].title);
    document.getElementById("stadium_description4").innerHTML = (res.articles[3].content);

    

  });

  
