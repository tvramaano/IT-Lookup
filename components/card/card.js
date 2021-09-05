function openNavigation(card_id,tab_name,tab_description,tab_image_src,page_name){
    document.getElementById(card_id).innerHTML = "<div class = 'card_container'>"+
                                                            "<div class = 'card_container_img'>"+
                                                                
                                                                "<img src = '"+tab_image_src+"'/>"+
      
                                                            "</div>"+

                                                            "<div class = 'card_container_info'>"+
                                                                "<div class = 'card_container_info_section_header'>"+tab_name+"</div>"+
                                                                
                                                                "<div class = 'card_container_info_section'><code>"+tab_description+"</code></div>"+
                                                                "<button onclick = 'goToPage("+page_name+",\"\")'>Explore</button>"+
                                                            "</div>"+

                                                    "</div>"
                                                        
}   

