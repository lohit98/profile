//did not use this file
var place="singapore dbs";
var script = document.createElement('script');
    script.type = 'text/javascript';
       function hndlr(response) {
            console.log(response);
            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                // in production code, item.htmlTitle should have the HTML entities escaped.
               document.body.style.backgroundImage="url("+item.link+")";
        				break;
            }

        } 
        function callback(data)
        {
            place = data.country_name;
            script.src = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAxVlr6fsnTDavlUVtXdaNFUfCVxdm1TUo&cx=a8c654d0e534ab175&q='+place+'+place+picture&searchType=image&callback=hndlr';
            document.body.appendChild(script);
            
          
        }
        
 

    var script1 = document.createElement('script');
    script1.type = 'text/javascript';
    
    script1.src = 'https://geolocation-db.com/json/geoip.php?jsonp=callback';
   
    document.body.appendChild(script1);

   
		
		