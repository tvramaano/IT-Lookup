function createFooter(footer_id){
    document.getElementById(footer_id).innerHTML = "<div class = 'footer_container'>"+
                                                        
                                                       
                                                        "<p>"+
                                                            "<text onclick = 'show_modal(\""+
                                                                 showStatus.show+"\","+
                                                                "\""+page_setup_parameters[page_index.pronounciation_settings_modal].page_id+"\")'>"+
                                                                    "Pronunciation Settings"+
                                                            "</text></br></br>"+

                                                            "<b>2021 IT-Lookup</b></br>"+
                                                            
                                                        "</p>"+

                                                        "<button "+ 
                                                            "id = 'scroll_button_id' "+
                                                            "onclick = 'scrollToTop()' "+
                                                        ">"+
                                                            "<img src = '"+image_sources.scroll_top_icon+"'/></br>"+
                                                            "Scroll to top"+
                                                        "</button>"+


                                                    "</div>"
}
