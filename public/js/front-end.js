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

    $(".select").on("change", function(event){
        var conceptName = $(".select").find(":selected").text()
        console.log($(this).val())
    
    })

    $(".test").on("click", function(event){
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
        let pass = $("#password").val()
        let confirm = $(".verify-password").val()
        const companieData = {
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
            email: $(".company_email").val()

        }
        console.log(companieData)
        if(pass === confirm){
            $(".verify-password").addClass("valid")
            $.ajax({
                url: "api/",
                method: "POST",
                data: companieData
            })
        } else {
            // If password does not match
            $(".verify-password").addClass("invalid").val('').attr("placeholder", "Password does not match!")
        }
    })
});
