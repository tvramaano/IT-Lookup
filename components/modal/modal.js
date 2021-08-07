function createModal(modal_id,modal_header,modal_content,modal_footer){
 
    document.getElementById(modal_id).innerHTML = 
    "<div class = 'modal_container_overlay'>"+
        "<div class = 'modal_container'>"+
            "<div class = 'modal_container_header'>"+modal_header+"</div>"+
            "<div class = 'modal_container_content'>"+modal_content+"</div>"+
            "<div class = 'modal_footer'>"+modal_footer+"</div>"+
        "</div>"+
    "</div>";     
}