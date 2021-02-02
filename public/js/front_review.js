$(".customer-review").on("click", function(event){
    const customerReviewId = $(event.target).attr("data-id")
    console.log(customerReviewId)


$(".add_review_button").on("click", function(event){
  event.preventDefault()
  console.log("front_review.js log")
  const addCustomerByRest = {
    title: $(".title").val(),
    body: $(".content").val(),
    rating: $(".stars").val(),
    pic: $(".customer_image_review").val(),
    BusinessId: ids,
    CustomerId: customerReviewId 
    
  }
  $.ajax({
      url: "/api/review",
      method: "POST",
      data: addCustomerByRest
  }).then(response=>{
    location.reload()
     console.log(response)
     
  })
})

})



$(".delete_review").on("click", function(event){
  const reviewId = $(event.target).attr("data-reviewId")
  console.log(reviewId)

  $.ajax({
    url: "/api/review/" + reviewId,
    method: "DELETE"
  }).then(res=>{
    console.log("success")
    location.reload()
  })


})

$(".edit_review").on("click", function(event){
  const reviewId = $(event.target).attr("data-reviewId")
  console.log (reviewId)

  $.ajax({
    url: "/api/review/" + reviewId,
    method: "GET"
  }).then(res=>{
    console.log(res)
    $("#title").val(res.title);
    $("#content").val(res.body);
    $("#stars").val(res.rating);
    $("#customer_image_review").val(res.pic);

    const editedReview = {
      id: reviewId,
      title: res.title,
      body: res.body,
      rating: res.rating,
      pic:res.pic
    }

      
   $(".edit_review_button").on("click", function(event){
    console.log (reviewId)
    $.ajax({
      url: "/api/review",
      method: "PUT",
      data: editedReview
    }).then(res=>{
      console.log("success")
      console.log(res)
      // location.reload()
    })


   })



  })


})



