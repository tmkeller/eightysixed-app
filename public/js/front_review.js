// adds customer id to the review
$(".customer-review").on("click", function (event) {
  const customerReviewId = $(event.target).attr("data-id");

  // adds business review to DB
  $(".add_review_button").on("click", function (event) {
    event.preventDefault();
    const addCustomerByRest = {
      title: $(".title").val(),
      body: $(".content").val(),
      rating: $(".stars").val(),
      pic: $(".customer_image_review").val(),
      BusinessId: ids,
      CustomerId: customerReviewId,
    };
    $.ajax({
      url: "/api/review",
      method: "POST",
      data: addCustomerByRest,
    }).then((response) => {
      location.reload();
    });
  });
});
// deletes the review that was posted
$(".delete_review").on("click", function (event) {
  const reviewId = $(event.target).attr("data-reviewId");
  $.ajax({
    url: "/api/review/" + reviewId,
    method: "DELETE",
  }).then((res) => {
    location.reload();
  });
});
// edits the review that the business had posted
const editReview = [];
$(".edit_review").on("click", function (event) {
  const reviewId = $(event.target).attr("data-reviewId");
  $.ajax({
    url: "/api/review/" + reviewId,
    method: "GET",
  }).then((res) => {
    $("#title").val(res.title);
    $("#content").val(res.body);
    $("#stars").val(res.rating);
    $("#customer_image_review").val(res.pic);
    $(".edit_review_button").on("click", function (event) {
      event.preventDefault();
      const newEdit = {
        id: reviewId,
        title: $("#title").val(),
        body: $("#content").val(),
        rating: $("#stars").val(),
        pic: $("#customer_image_review").val(),
      };
      $.ajax({
        url: "/api/review",
        method: "PUT",
        data: newEdit,
      }).then((res) => {
        location.reload();
      });
    });
  });
});
