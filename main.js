$(document).ready(function(){

    var client_id ="753340088489-egfg334pviih0ulp0v0t8ntlfd5lokgn.apps.googleusercontent.com"

    var redirect_uri="http://localhost/OAuthAssignment/fileupload.html"

    var destination="https://www.googleapis.com/auth/drive"

    var long_url=""


    $("#login").click(function(){

        signIn(client_id,redirect_uri,destination,long_url);
    
    
    })


    function signIn(client_id,redirect_uri,scope,long_url){

        long_url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+client_id+"&scope="+destination
        +"&access_type=offline";

        window.location = long_url;
        
    }


});