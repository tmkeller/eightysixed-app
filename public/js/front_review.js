$(".add_review_button").on("click", function(event){
  event.preventDefault()
  console.log("front_review.js log")
  const addCustomerByRest = {
    title: $(".title").val(),
    body: $(".content").val(),
    rating: $(".stars").val(),
    pic: $(".customer_image_review").val(),
    BusinessId: ids,
    CustomerId: $(".testerniner").attr("data-value")
    
  }
  $.ajax({
      url: "/api/review",
      method: "POST",
      data: addCustomerByRest
  }).then(response=>{
     console.log(response)
     location.reload()
  })
})