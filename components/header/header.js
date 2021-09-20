function createHeader(header_id,isReturned){
      
    const header_content = "<div class = 'header_container'>"+

                                "<div class = 'header_section_side'></div>"+

                                "<div class = 'header_section_center'>"+
                                        "<img class = 'logo_img' src = '"+image_sources.itlookup_icon+"'/>"+
                                 "</div>"+

                                "<div class = 'header_section_side'></div>"+
                                                          
                                                       

                             "</div>";
 
    if(!isReturned){
         return header_content;   
    }   
    else{                        
        document.getElementById(header_id).innerHTML = header_content;
    }

}

function func(){
    console.log("Hello");
}