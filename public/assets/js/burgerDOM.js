// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // when a button with this class is clicked, change the eaten state of the corresponding item
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id"); // get the id of the item tied to this button
    var oldState = $(this).data("eaten"); // get the eaten state of the item tied to this button
    var newState;

    if(oldState == 1){
      newState = 0;
    }
    else{
      newState = 1;
    }

    var newAttr = {
      devoured: newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAttr
    }).then(
      function() {
        console.log("Changed consumed to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // when a button with this class is clicked, create a new burger
  $(".create-burger").on("click", function(event) {
    
    console.log("Pressed Create Burger Button");
    
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("Attempting to create new burger");

    var newBurger = {
      burger_name: $("#nameinput").val().trim(),
      devoured: $("[name=eaten]:checked").val().trim()
    };

    console.log("Attempting to create new burger");

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // when a button with this class is clicked, delete the corresponding item
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger");

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
