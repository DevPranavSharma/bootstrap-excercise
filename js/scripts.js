$("#mycarousel").carousel( { interval: 2000 } );
        $(document).ready(function(){
           
            $("#carouselButton").click(function(){
                if($("#carouselButton").children("span").hasClass("fa-pause")){
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children('span').removeClass('fa-pause');
                    $("#carouselButton").children('span').addClass('fa-play');

                }
                else{
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children('span').removeClass('fa-play');
                    $("#carouselButton").children('span').addClass('fa-pause');

                }
            });

            $("#reservebtn").click(function(){
                 $("#reserveTableModal").modal('toggle')
            });
            $("#loginbutton").click(function(){
                 $("#loginModal").modal('toggle')
            });
            $("#dismissModalBtn1").click(function(){
                 $("#loginModal").modal('toggle')
            });
            $("#dismissModalBtn2").click(function(){
                 $("#loginModal").modal('toggle')
            });
            $("#dismissModalBtn3").click(function(){
                 $("#reserveTableModal").modal('toggle')
            });
            $("#dismissModalBtn4").click(function(){
                 $("#reserveTableModal").modal('toggle')
            });
        })