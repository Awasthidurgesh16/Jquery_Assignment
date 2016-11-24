$(document).ready(function(){

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

        $.ajax({
            method: 'GET',
            url: sURL,
            success: function(results){
                var movies=results.Search;
                
                $.each(movies,function(j,res)
                {
                    console.log(res);
                        
                         //$answerContainer.append('<tr><th><img src="' +res.Poster+''> + '</th><th>' + res.Title + '</th><th>' +res.Type + '</th><th>' + res.Year +'</th></tr>');                         
                    $answerContainer.append('<li><img src="'+res.Poster+'"/></li>'
                        +'<li>'+res.Title+'</li>'
                       +'<li>'+res.Type+'</li>'
                        +'<li>'+res.Year+'</li>')  ;                     
                    
                });


                },
            error: function(error){
                console.error('@ERROR', error);
            }
    });
        

});

});