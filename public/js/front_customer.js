
$(".switch").on("change", function(event){
    console.log($(".toggle").prop('checked'))
    event.preventDefault()
})


    $(".sign-button").on("click", function(event){
    event.preventDefault()
    console.log("click")
    console.log($(".toggle").prop('checked'))
    const sign_in = {
        email: $(".sign_email").val(),
        password: $(".sign_pass").val()
    }
   if($(".toggle").prop('checked') === true){

    $.ajax({
        url: "/api/customer/search",
        method: "POST",
        data: sign_in
    }).then(response=>{
        console.log(response)
        if(response.email === $(".sign_email").val() && response.password === $(".sign_pass").val()){
            console.log("success")
        }else{
            console.log("fail")
        }

    })
   }
   if($(".toggle").prop('checked') === false){
    $.ajax({
        url: "/api/business/search",
        method: "POST",
        data: sign_in
    }).then(response=>{
        console.log(response)
        if(response.email === $(".sign_email").val() && response.password === $(".sign_pass").val()){
            console.log("success")
        }else{
            console.log("fail")
        }

    })

   }
    
})

