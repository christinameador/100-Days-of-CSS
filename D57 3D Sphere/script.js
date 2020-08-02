$(document).ready(function(){
    var circle = $(".circle");
    var html = '';
    var slices = 19;
    
    for (var i = 1; i <= slices; i++){
        html += '<div class="slice slice-'+i+'"></div>';
    }
    
    circle.append(html);
});