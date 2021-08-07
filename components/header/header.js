function setupHeader(header_id,subHeading_content,dirImg){
    let dir = "../../";
    if(header_id === "index_page_id"){
        dir = "";
    }
    document.getElementById(header_id).innerHTML = "<div class = 'header'>"+
                                                        "<div class = 'header_container_empty'><div>"+
                                                            "<div class = 'header_container'>"+
                                                                "<div class = 'header_container_outer'>"+
                                                                    "<div class = 'header_container_inner'>"+
                                                                        "<h2>Hello World</h2>"+
                                                                        "<span>"+subHeading_content+"</span><br>"+
                                                                        "<img onclick = 'goToPage(page_index.navigation,\""+dir+"\")' src = '"+getImageDir(dirImg)+image_sources.menu_icon+"'/>"+
                                                                        "<img onclick = 'goToPage(page_index.index,\""+dir+"\")' src = '"+getImageDir(dirImg)+image_sources.home_icon+"'/>"+
                                                                        "<img onclick = 'goToPage(page_index.about,\""+dir+"\")' src = '"+getImageDir(dirImg)+image_sources.about_icon+"'/>"+
                                                                    "</div>"+
                                                                "</div>"+
                                                            "</div>"+
                                                     "</div>";
                                                    
                                                   
}
