let bonQuiQui = [
  {
    photo: "assets/img/complicated.jpg",
  },
  {
    photo: "assets/img/rude.jpg",
  },
  {
    photo: "assets/img/security.jpg",
  }
]


$(function() {
    $(".change-burger").on("click", function(event) {

        let id = $(this).data("id");
        let letsEat = $(this).data("eaten");

        if (!letsEat) {
          letsEat = true
        } else (
          letsEat = false
        )

        let letsEatState = {
        eaten: letsEat
        };

        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: letsEatState
        }).then(
        function() {
            location.reload();
        }
        );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerName").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          bonQuiQuiPhoto()
          $("#complicatedOrder").modal('show')
        }
      );
    });
    
    $("#closeButton").on("click" , function(event){
      reloadPage()
    })
});

function reloadPage() {
  location.reload();
}

function bonQuiQuiPhoto() {

  let ranNum = Math.floor(Math.random() * bonQuiQui.length)
  let ranQuote = bonQuiQui[ranNum].photo  

  let modalImage = $("<img>")
  .attr("src", ranQuote)
  .addClass("img-fluid")
  .attr("alt", "Responsive image")

  $("#bonQuiQuiPhoto").html(modalImage)

}

  
  