// pulls id out of local storage
const ids = localStorage.getItem("id");

// the triggers and click events for the modals
$(document).ready(function () {

  const categoryArray = [];
  // The .dropdown() and .modal() functions were not working, so these initializations
  // for dropdowns and modals had to be done in vanilla Javascript.
  const dropdownElems = document.querySelectorAll(".dropdown-trigger");
  const dropdownInstances = M.Dropdown.init(dropdownElems, "click");
  const modalElems = document.querySelectorAll(".modal");
  const modalInstances = M.Modal.init(modalElems);
  const formElems = document.querySelectorAll("select");
  const formInstances = M.FormSelect.init(formElems, "click");

  // controls the toggle switch on the create account page
  $(".select").on("change", function (event) {
    var conceptName = $(".select").find(":selected").text();
  });

  $(".customer_select").on("change", function (event) {});

  //   lets you choose a category on the create an account page
  $(".ctgy").on("click", function (event) {
    $(".dropdown-trigger").html($(event.target).text());
    categoryArray.unshift($(event.target).text());
    if (categoryArray.length > 1) {
      categoryArray.pop();
    }
  });

  // Create img URL to hold cloudinary result, using category based default
  let cloudBizURL = "";
    
  // Adding Cloudinary event listener for business create
  $("#cloudinary-bttn").on("click", function (event) {
  var bizWidget = cloudinary.createUploadWidget({ 
    cloudName: "turning-the-tables", 
    uploadPreset: "tt-business" }, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log("Done! Here is the image info: ", result.info);
        console.log(result.info.secure_url);
        cloudBizURL = result.info.secure_url;
      } 
    });
    bizWidget.open();
  });
 
  // Adding Cloudinary event listener for customer create
  $("#cloudinary-cust").on("click", function (event) {
    var custWidget = cloudinary.createUploadWidget({ 
      cloudName: "turning-the-tables", 
      uploadPreset: "tt-customer" }, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log("Done! Here is the image info: ", result.info);
          console.log(result.info.secure_url);
          cloudBizURL = result.info.secure_url;
        } 
      });
      custWidget.open();
    });

  // Submits sign-up form
  $(".sign-up-button").on("click", function (event) {
    event.preventDefault();

    let pass = $(".password-company").val();
    let confirm = $(".verify-password").val();
    let companyData = {
      name: $(".company_name").val(),
      address: $(".address").val(),
      addresstwo: $(".addresstwo").val(),
      city: $(".city").val(),
      state: $(".select").val(),
      zip5: $(".zip").val(),
      phone: $(".phone").val(),
      category: $("#category_name").val(),
      website: $(".websight").val(),
      password: pass,
      pic: cloudBizURL,
      email: $(".company_email").val(),
    };
    if (pass === confirm) {
      $(".verify-password").addClass("valid");
      $.ajax({
        url: "/api/business",
        method: "POST",
        data: companyData,
      })
        .then((data) => {
          window.location.href = "/";
        })
        .fail((err) => {
          alert("Be sure to enter valid email, 5 digit zip, password, and/or a name. Required fields are highlighted.");
          $(".zip").addClass("invalid")
          $(".company_email").addClass("invalid")
          $(".company_name").addClass("invalid")
          $(".password-company").addClass("invalid")
          $(".verify-password").addClass("invalid")
        });
    } else {
      // If password does not match
      $(".verify-password")
        .addClass("invalid")
        .val("")
        .attr("placeholder", "Password does not match!");
    }
  });
  // allows business to update info
  $(".update-button").on("click", function (event) {
    event.preventDefault();

    let pass = $(".password-company").val();
    let confirm = $(".verify-password").val();
    const companyData = {
      id: $(".update-button").attr("data-id"),
      name: $(".company_name").val(),
      address: $(".address").val(),
      addresstwo: $(".addresstwo").val(),
      city: $(".city").val(),
      state: $(".select").val(),
      zip5: $(".zip").val(),
      phone: $(".phone").val(),
      category: $("#category_name").val(),
      website: $(".websight").val(),
      pic: $(".company_image").val(),
      email: $(".company_email").val(),
    };
    if (pass) {
      companyData.password = pass;
    }
    if (pass === confirm) {
      $(".verify-password").addClass("valid");
      $.ajax({
        url: "/api/business/" + $("#su-submit-button").attr("data-id"),
        method: "PUT",
        data: companyData,
      })
        .then((data) => {
          window.location.href = "/";
        })
        .fail((err) => {
          alert("Update failed.");
        });
    } else {
      //     // If password does not match
      $(".verify-password")
        .addClass("invalid")
        .val("")
        .attr("placeholder", "Password does not match!");
    }
  });
  ///////////////////Customer Profiles Below/////////////////
  $(".add_customer_button").on("click", function (event) {
    event.preventDefault();
    const customerProfile = {
      first_name: $(".fName").val(),
      last_name: $(".lName").val(),
      isClaimed: false,
      city: $(".customer_city").val(),
      state: $(".customer_select").val(),
      zip5: $(".customer_zip").val(),
      email: $(".customer_email").val(),
      // password: $(".password-customer").val(),
      pic: cloudBizURL,
      BusinessId: ids,
    };

    $.ajax({
      url: "/api/customer",
      method: "POST",
      data: customerProfile,
    }).then((res) => {
      location.reload();
    }).fail((err) => {
      $(".customer_email").val('')
      .attr("placeholder", "First, Last, Zip, required!")
      .addClass("invalid")
    })
  });
});
