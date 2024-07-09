jQuery(document).ready(function( $ ) {
  $("nav#menu").mmenu({
     "extensions": [
        "pagedim-black",
        "shadow-page"
     ],
     "offCanvas": {
        zposition   : "front"
     },
 
     "navbars": [
        {
           "position": "top",
           "content": [
             '<a href="index.html"><img src="images/logo.png" class="img-responsive" alt="Image"></a>'
           ]
        },
        {
           "position": "bottom",
           "content": [
              "<a class='fa fa-envelope' href='#/'></a>",
              "<a class='fa fa-twitter' href='#/'></a>",
              "<a class='fa fa-facebook' href='#/'></a>"
           ]
        }
     ]
  });
});