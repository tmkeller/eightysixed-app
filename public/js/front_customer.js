
const accountValue = [false]
$(".switch").on("change", function(event){
    event.preventDefault()
    accountValue.unshift($(".toggle").prop('checked'))
    if(accountValue.length > 1){
        accountValue.pop()
    }
})

    $(".sign-button").on("click", function(event){
    event.preventDefault()
    if(accountValue[0] === true){
    console.log("customer clickclick")
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
   
    }

    if(accountValue[0] === false){
    event.preventDefault()
    const sign_in = {
        email: $(".sign_email").val(),
        password: $(".sign_pass").val()
    }
   console.log("event in fron_customer")
    $.ajax({
        url: "/api/business/login",
        method: "POST",
        data: sign_in
    }).then(response=>{
      
        $.ajax({
            url: "/business/:" + response.id,
            method:"get",
        }).then(data=>{
           
            window.location.href = "/business/" + "login"
        })

    })
    }

})

