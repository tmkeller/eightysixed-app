// changes the account creation to either a customer or a business
const accountValue = [false];
$(".switch").on("change", function (event) {
  event.preventDefault();
  accountValue.unshift($(".toggle").prop("checked"));
  if (accountValue.length > 1) {
    accountValue.pop();
  }
});

// triggers the modal for signing in and sends the info to check if correct
$(".sign-button").on("click", function (event) {
  event.preventDefault();
  // conditional if sign in is correct
  if (accountValue[0] === true) {
    $.post("/api/customer/login", {
      email: $(".sign_email").val(),
      password: $(".sign_pass").val(),
    })
      .then((response) => {
        window.location.href = "/customer-profile";
      })
      .fail((err) => {
        console.log(err);
        alert("Sign-in failed");
      });
  }
  // conditional if sign in is wrong
  if (accountValue[0] === false) {
    event.preventDefault();
    $.post("/api/business/login", {
      email: $(".sign_email").val(),
      password: $(".sign_pass").val(),
    })
      .then((response) => {
        $.get("/business-main/" + response.id, {}).then((res) => {
          window.location.href = "/business-main/" + response.id;
          localStorage.setItem("id", response.id);
        });
      })
      .fail((err) => {
        console.log(err);
        alert("Sign-in failed");
      });
  }
});
// customer search function allows the user to search the customer DB for a customer
$(".customer_search").on("click", function (event) {
  event.preventDefault();
  $.get("/search-results/" + $(".firstName-search").val(), {}).then((res) => {
    window.location.href = "/search-results/" + $(".firstName-search").val();
    $(".firstName-search").val("");
  });
});
