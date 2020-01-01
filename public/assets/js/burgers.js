// Make sure we wait to attach our handlers until the DOM is fully loaded.
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
          location.reload();
        }
      );
    });
  
  });
  