document.addEventListener('DOMContentLoaded', function() {
    console.log("click")
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, "hover");
  });

// $(function(){


////////////////Button that submits sign-up form//////////////
    $(".sign-up-button").on("click", function(event){
        // event.preventDefault()
        let pass = $("#password").val()
        let confirm = $(".verify-password").val()
        const companieData = {
            name: $(".company_name").val(),
            password: pass,
            email: $(".company_email").val()
        }
         
        if(pass === confirm){
            $(".verify-password").addClass("valid")
            $.ajax({
                url: "api/",
                method: "POST",
                data: companieData
            })
           }else{
            ///if password does not match, this will happen.//
            $(".verify-password").addClass("invalid").val('').attr("placeholder", "Password does not match!")
            
           }

    })
// })