var url =
  "https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=e7a9e149d64c4a26aa4462358d220721";

var req = new Request(url);
fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(res) {
    console.log(res);
    let data = res['articles'];
    console.log("total records: " + data.length)
    let string = '';

    var div = document.getElementById('articles');
    

      for(let i= 0; i < data.length; i++){
        string += '<div class="item">';
          string += '<div class="article_title">' + data[i]['title'] + '</div>';
          string += '<div class="article_author">' + data[i]['author'] + '</div>';
          string += '<div class="article_content">' + data[i]['content'] + '</div>';
        string += '</div>';
      }

    div.innerHTML += string;    

  });

  
