$(document).ready(function(){
      $(".content").hide();
    $("#do-search").on('click',function(){
        
        

        var $answerContainer=$('#answer');
        //Get data from input box
        var MovieTitle = $('#movie-title').val();
        console.log("search movie",MovieTitle);
        $answerContainer.empty();
        //Build our URI with the movie title
        var sURL = "http://www.omdbapi.com/?s=" +MovieTitle;

        //Grab our container and assign it to variable for later use
        //var container = $('#container');
        $(".content").show();

        $.ajax({
            method: 'GET',
            url: sURL,
            success: function(results){
                var movies=results.Search;
                
                $.each(movies,function(j,res)
                {
                    console.log(res);
                        
                         //$answerContainer.append('<tr><th><img src="' +res.Poster+''> + '</th><th>' + res.Title + '</th><th>' +res.Type + '</th><th>' + res.Year +'</th></tr>');                         
                    // $answerContainer.append('<li><img src="'+res.Poster+'"/></li>'
                    //     +'<li>'+res.Title+'</li>'
                    //    +'<li>'+res.Type+'</li>'
                    //     +'<li>'+res.Year+'</li>'
                    //     +'<li>'+res.imdbID+'</li>')  ;  
                                if(res.Poster=="N/A"){
                                        res.Poster="img/not-found.png";
                                }
                    
                            $answerContainer.append('<div class="row ">'+
                            '<div class="col-md-2 col-md-offset-1"><img src="'+ res.Poster +'" ></div>'+
                            '<div class="col-md-2">'+ res.Title +'</div>'+
                            '<div class="col-md-2">'+ res.Year +'</div>'+
                            '<div class="col-md-2">'+ res.Type +'</div>'+
                            '<div class="col-md-2">'+ res.imdbID +'</div>'+'</div>');


                    
                });


                    },
            error: function(error){
                console.error('@ERROR', error);
            }
    });
$(selector).pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });        

});

});