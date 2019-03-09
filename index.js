'use strict';

function operateShoppingList() {

    // Listen for form submit
    $("#js-shopping-list-form").submit(function(event) {
        // Prevent form from trying to submit to a server
        event.preventDefault();
    
        // Get item entered
        const itemEntered = $(this).find("#shopping-list-entry").val();
        $("#shopping-list-entry").val("");

        let newItem = $(`<li>
        <span class="shopping-item">${itemEntered}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

        // Add new <li> with new shopping list item
        $(".shopping-list").prepend(newItem);
        
        // Clear text box for subsequent entries
        //itemEntered.val("");
        
    });

}

$(operateShoppingList());