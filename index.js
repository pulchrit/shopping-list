'use strict';

function operateShoppingList() {

    // Changes milk's button from check to un-check...I'm doing this because we aren't 
    // supposed to change the html in any way. I added the extra functionality of 
    // changing the button's text, so I need to dynamically update the check button for 
    // milk to un-check on page load. If this program was built from scratch and working 
    // from an empty shopping list, this portion of code would be unnecessary. 
    let wrongButtonLabel = $(".shopping-item__checked").next().find('.button-label').eq(0);
    if (wrongButtonLabel.text() === 'check') {
        wrongButtonLabel.text('un-check');
    } 

    // Listen for form submit to add items.
    $("#js-shopping-list-form").submit(function(event) {
        
        // Prevent form from trying to submit to a server.
        event.preventDefault();
    
        // Get item entered.
        const itemEntered = $(this).find("#shopping-list-entry").val();
        
        // Clear text box for subsequent entries.
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

        // Add new <li> with new shopping list item.
        $(".shopping-list").prepend(newItem);     
    });

    // Remove list item when delete button is clicked.
    $("ul").on("click", ".shopping-item-delete", function(event) {
       
        // Remove the closest <li> up the DOM to this remove button.
        this.closest("li").remove();
    });

    // Mark item as checked by toggling on/off strikethrough styling
    // as well as updating the text of the button itself from check to un-check.
    $("ul").on("click", ".shopping-item-toggle", function(event) {
        
        // Toggle strikethrough styling on/off.
        // Target the span that is the prev() element to this element's parent().
        // (I couldn't get closest() to work correctly here...)
        let thisShoppingItem = $(this).parent().prev();
        thisShoppingItem.toggleClass("shopping-item__checked");

        // Toggle text of button label from check to un-check and vice-versa.
        // Target label of this button by calling children() on the button to 
        // access the span.button-label which is the only child of the button.
        let thisButtonLabel = $(this).children();
        thisButtonLabel.text() === 'check' ? thisButtonLabel.text('un-check') : thisButtonLabel.text('check'); 
    });  
}

// Run the function on page load.
$(operateShoppingList());