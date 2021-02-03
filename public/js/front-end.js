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
  // Submits sign-up form
  $(".sign-up-button").on("click", function (event) {
    event.preventDefault();

    let pass = $(".password-company").val();
    let confirm = $(".verify-password").val();
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
          alert("Signup failed");
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
      category: categoryArray.toString(),
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
      pic: $(".customer_image").val(),
      BusinessId: ids,
    };

    $.ajax({
      url: "/api/customer",
      method: "POST",
      data: customerProfile,
    }).then((res) => {
      location.reload();
    });
  });
});
