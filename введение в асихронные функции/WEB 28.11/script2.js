$("input[name='8A']").change(function (){
    if 
})

$("input[name='8B']").change(function (){
    
})

$("input[name='8C']").change(function (){

})


$("input[name='name']").change(function () {
    console.log($(this).val());
    let s = [1,2,3];
    $("#class").text("")
    for (let i=0; i<s.length; i++ ) {
        $("#class").append($("<li>", {
            text: s[i]
        }))
    }
})