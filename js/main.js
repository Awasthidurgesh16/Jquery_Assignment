$(document).ready(function(){
        var count = 0;
      $(".content").hide();
    $("#do-search").on('click',function(){
        
        $("#pagination1 ul").empty();

        var $answerContainer=$('#answer');
        //Get data from input box
        var MovieTitle = $('#movie-title').val();
        //console.log("search movie",MovieTitle);
        $answerContainer.empty();
        //Build our URI with the movie title
        var sURL = "http://www.omdbapi.com/?s=" +MovieTitle;

        //Grab our container and assign it to variable for later use
        //var container = $('#container');
        $(".content").show();
        $("#answer").show();

        $.ajax({
            method: 'GET',
            url: sURL,
            success: function(results){
                var movies=results.Search;
               
                $.each(movies,function(j,res)
                {
                   
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

                   //start pagination
                        var itemsPerPage = 4;
                         var count = movies.length;
                        var paginationLength = Math.ceil(count / itemsPerPage);

                        $('.row').filter(":gt("+(itemsPerPage)+")").hide();


                        for (var i = 0; i < paginationLength; i++) {
                            $("#pagination1 ul").append("<li><a href='#'>" + (i + 1) + "</a></li>");
                        }
                        $("#pagination1 ul li").on('click', function() {
                            $('.row').hide();
                            var linkNumber = $(this).text();
                            console.log(linkNumber+" "+itemsPerPage);
                            var contentToShow = $('.row').filter(':lt(' + linkNumber * itemsPerPage + ')');
                            var contentToHide = $('.row').filter(':lt(' + (linkNumber - 1) * itemsPerPage + ')')
                            $.merge(contentToHide, $('.row').filter(":gt(" + (((linkNumber) * itemsPerPage) - 1) + ")"));

                            contentToShow.show();
                            contentToHide.hide();
                        });
                    


                    },
            error: function(error){
                console.error('@ERROR', error);
            }
    });
            

                          
});

});