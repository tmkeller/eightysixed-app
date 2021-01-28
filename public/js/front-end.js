const categoryArray = []

document.addEventListener('DOMContentLoaded', function(event) {
    console.log("click")
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, "hover");
  });

  document.addEventListener('DOMContentLoaded', function(event) {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, "click");
    console.log(instances)

  });
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


////////////////Button that submits sign-up form//////////////
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
           }else{
            ///if password does not match, this will happen.//
            $(".verify-password").addClass("invalid").val('').attr("placeholder", "Password does not match!")
            
           }

    })
// })

