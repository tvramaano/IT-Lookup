function showLoading(loading){
     document.getElementById(loading).innerHTML = "<div id = 'loading_overlay'>"+
                                                         "<div class = 'loading_section'></div>"+
                                                     "</div>";
}

function hideLoading(loading){
   document.getElementById(loading).style.display = "none";
}

function showLoadingTime(loading){
   setTimeout(hideLoading,2000,loading);
}