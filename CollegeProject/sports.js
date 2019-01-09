var url =
  "https://newsapi.org/v2/everything?q=premierleague&apiKey=e7a9e149d64c4a26aa4462358d220721";

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
  

    var div = document.getElementById('articles-container');
    
   

      for(let i= 0; i < data.length; i++){
    
     //  string += '<div class="row">';
          string += '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex align-items-stretch">';
          string += '<div class="item">';
          string += '<div class="article_image_container">';
          string += '<img class="article_image img-fluid"src=' + '"' + data[i]['urlToImage'] + '"' + '>';
          string += '</div>';
          string += '<div class="article_title">' + data[i]['title'] + '</div>';
          string += '<div class="article_author">' + data[i]['author'] + '</div>';
          string += '<div class="article_date">' + data[i]['publishedAt'] + '</div>';
          string += '<div class="article_content">' + data[i]['content'] + '</div>';
          string += '<a href=' + '"' + data[i]['url'] + '"' + '>' + 'Click to read full article...' + '</a>';

          string += '</div>';
          string += '</div>';
        
         

     //     string += '</div>';
     
        


      
        

 
        
       
   
      }

    div.innerHTML += string;    

  });

  
