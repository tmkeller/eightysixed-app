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
        console.log("customer click");
        console.log("event in front_customer.js")
        $.post( "/api/customer/login", {
            email: $(".sign_email").val(),
            password: $(".sign_pass").val()
        }).then(response=>{
            console.log(response)
        }).fail( err => {
            console.log( "Sign in failed" );
            console.log( err );
        })
    }

    if(accountValue[0] === false){
        event.preventDefault()
        console.log("business click")
        console.log("click")
        console.log("event in front_customer.js")
        $.post( "/api/business/login", {
            email: $(".sign_email").val(),
            password: $(".sign_pass").val()
        }).then(response=>{
            console.log(response)
        }).fail( err => {
            console.log( "Sign in failed" );
            console.log( err );
        })
    }
})

