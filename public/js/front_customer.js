
$(".switch").on("change", function(event){
    console.log($(".toggle").prop('checked'))
    event.preventDefault()
    $(".sign-button").on("click", function(event){
        event.preventDefault()
    console.log("click")
    const sign_in = {
        email: $(".sign_email").val(),
        password: $(".sign_pass").val()
    }
   console.log("event in fron_customer")
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
})
})
