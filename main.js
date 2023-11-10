$(".img1").on("click", function() {

const src1 = $(this).attr("src") ;
const src2 = $(this).attr("alt-src") ;

    $(this).attr("src" , src2)
    $(this).attr("alt-src" , src1)
    
})