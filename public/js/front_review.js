$(".add_customer_button").on("click", function(event){
  event.preventDefault()
  console.log("front_review.js log")
  const addCustomerByRest = {
    title: $(".f-customer-name").val(),
    pic: $(".l-customer-name").val(),
    body: $(".commentAboutCus").val(),
    rating: $(".stars").val()
  }
  $.ajax({
      url: "/api/review",
      method: "POST",
      data: addCustomerByRest
  }).then(response=>{
     console.log(response)
  })
})