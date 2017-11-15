function preInitPage (){    
    var ridVal = getURLParameter('rid');
    if (ridVal === null){
        goByHREF();
    }
}

function getURLParameter(name) {
    return decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
        .exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function goByHREF() {
    var winLocation = window.location;	        
    return winLocation.replace(winLocation.origin + winLocation.pathname + '?rid=Jerry.Jones@example.com');	        
}