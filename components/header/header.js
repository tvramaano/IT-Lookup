function setupHeader(header_id,subHeading_content,dirImg){
    let dir = "../../";
    if(header_id === "index_page_id"){
        dir = "";
    }
    document.getElementById(header_id).innerHTML = "<div class = 'header'>"+
                                                        "<div class = 'header_container_empty'>"+
                                                           
                                                            "<div class = 'header_container_empty_img'>"+
                                                                "<img onclick = 'navigation_modal(\"open\",\"navigation_id\")' src = '"+getImageDir(dirImg)+image_sources.menu_icon+"'/>"+
                                                                "<img onclick = 'goToPage(page_index.index,\""+dir+"\")' src = '"+getImageDir(dirImg)+image_sources.home_icon+"'/>"+
                                                            "</div>"+
                                                            "<h3><code>< Hello World /></code></h3>"+
                                                        "</div>"+
                                                        "<div class = 'subheader'><code>"+subHeading_content+"...</code></div>"+
                                                            
                                                     "</div>";
                                                    
                                                    
     /**"<div class = 'header_container'>"+
                                                                "<div class = 'header_container_outer'>"+
                                                                    "<div class = 'header_container_inner'>"+
                                                                        "<h2>< Hello World/></h2>"+
                                                                        "<span>"+subHeading_content+"</span><br>"+
                                                                        "<img onclick = 'navigation_modal(\"open\",\"navigation_id\")' src = '"+getImageDir(dirImg)+image_sources.menu_icon+"'/>"+
                                                                        "<img onclick = 'goToPage(page_index.index,\""+dir+"\")' src = '"+getImageDir(dirImg)+image_sources.home_icon+"'/>"+
                                                                 "</div>"+
                                                                "</div>"+
                                                            "</div>"+ */                                              
}



