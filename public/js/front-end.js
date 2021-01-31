$(document).ready( function() {
    const categoryArray = []
    // The .dropdown() and .modal() functions were not working, so these initializations
    // for dropdowns and modals had to be done in vanilla Javascript.
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    const dropdownInstances = M.Dropdown.init(dropdownElems, "hover");
    const modalElems = document.querySelectorAll('.modal');
    const modalInstances = M.Modal.init(modalElems);
    const formElems = document.querySelectorAll('select');
    const formInstances = M.FormSelect.init(formElems, "click");

    $(".test").on('click', function() {
        $("#modal1").hide()
    });

    $(".select").on("change", function(event){
        var conceptName = $(".select").find(":selected").text()
        console.log($(this).val())
    })

    $(".customer_select").on("change", function(event){
      console.log($(this).val())
    })
  
    $(".ctgy").on("click", function(event){
       $(".dropdown-trigger").html($(event.target).text())
        categoryArray.unshift($(event.target).text())
        console.log(categoryArray)
        if(categoryArray.length > 1){
            categoryArray.pop()
            console.log(categoryArray)
        }
    
    })
    // Submits sign-up form
    $(".sign-up-button").on("click", function(event){
        event.preventDefault()
        let pass = $(".password-company").val()
        let confirm = $(".verify-password").val()
        const companyData = {
            name: $(".company_name").val(),
            address: $(".address").val(),
            addresstwo: $(".addresstwo").val(),
            city: $(".city").val(),
            state: $(".select").val(),
            zip5: $(".zip").val(),
            phone: $(".phone").val(),
            category: categoryArray.toString(),
            website: $(".websight").val(),
            password: pass,
            pic: $(".company_image").val(),
            email: $(".company_email").val()

        }
        console.log(companyData)
        if(pass === confirm){
            $(".verify-password").addClass("valid")
            $.ajax({
                url: "/api/business",
                method: "POST",
                data: companyData
            }).then( data => {
                console.log( "Signed up!" );
                window.location.href = "/";
            }).fail( err => {
                console.log( "Signup failed." );
                console.log( err );
                alert( "Signup failed" );
            })
        } else {
            // If password does not match
            $(".verify-password").addClass("invalid").val('').attr("placeholder", "Password does not match!")
        }
    })
    ///////////////////Customer Profiles Below/////////////////
    $(".customer-profile-button").on("click", function(event){
        let customerPass = $(".c-verify-password").val()
        event.preventDefault()
        const customerProfile = {
            first_name: $(".fName").val(),
            last_name:$(".lName").val(),
            // email: $(".customer_email").val(),
            // password: $(".password-customer").val(),
            pic: $(".customer_image").val(),
            email: $(".customer_email").val(),
            zip: $(".customer_zip").val(),
            city: $(".customer_city").val(),
            state: $(".customer_select").val()
        }
        console.log(customerProfile)
        console.log(customerPass)
        console.log($("c-verify-password").val())
        if(customerPass === $(".password-customer").val()){
            $(".verify-password").addClass("valid")
            $.ajax({
                url: "/api/customer",
                method: "POST",
                data: customerProfile
            })
        } else {
            // If password does not match
            $(".c-verify-password").addClass("invalid").val('').attr("placeholder", "Password does not match!")
        }
    })   
});
