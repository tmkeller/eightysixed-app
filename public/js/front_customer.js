

const accountValue = [false]
$(".switch").on("change", function(event){
    event.preventDefault()
    accountValue.unshift($(".toggle").prop('checked'))
    if(accountValue.length > 1){
        accountValue.pop()
    }
})

$(".sign-button").on("click", function(event){
    event.preventDefault();

    if(accountValue[0] === true){
        console.log("event in front_customer.js")
        $.post( "/api/customer/login", {
            email: $(".sign_email").val(),
            password: $(".sign_pass").val()
        }).then(response=>{
            console.log(response)
            window.location.href = "/customer-profile";
        }).fail( err => {
            console.log( "Sign in failed" );
            console.log( err );
            alert( "Sign-in failed");
        })
    }

    if(accountValue[0] === false){
        event.preventDefault()
        console.log("event in front_customer.js")
        $.post( "/api/business/login", {
            email: $(".sign_email").val(),
            password: $(".sign_pass").val()
        }).then(response=>{
            console.log(response.id)
            $.get("/business-main/" + response.id, {
            }).then(res=>{ 
               window.location.href = "/business-main/" + response.id;
               localStorage.setItem("id", response.id)
            
            })

        }).fail( err => {
            console.log( "Sign in failed" );
            console.log( err );
            alert( "Sign-in failed" );
        })

    }
})

////////////////////////////////////////////////////////////////////////////////
$(".customer_search").on("click", function(event){
   
    event.preventDefault()
    
   console.log($(".firstName-search").val()) 
    $.get( "/search-results/" + $(".firstName-search").val(), {

    }).then(res => {
        console.log(res)
        window.location.href = "/search-results/" + $(".firstName-search").val()
        $(".firstName-search").val('')

    })
})