

## Collapsible Accordion + List in Onsen with Vanilla JS & CSS3

Recently, I needed an accordion in an `ons-list` based on the trials and tribulations of that endeavor, I figured I would create this for others as well!

There are 3 components needed to make this work:  HTML, JS, and the CSS.

The HTML:

    <ons-list-item tappable class="accordion" onclick="fn.toggle(this)">Items</ons-list-item>
        <div class="panel">
           <ons-list-item tappable>Item 1</ons-list-item>
           <ons-list-item tappable>Item 2</ons-list-item>
           <ons-list-item tappable>Item 3</ons-list-item>
           <ons-list-item tappable>Item 4</ons-list-item>         
       </div>
     </ons-list-item>

The JS:

    window.fn = {};
    window.fn.toggle = function(el) {
        el.classList.toggle("active");
        el.nextElementSibling.classList.toggle("show");
    }

The CSS:

    .accordion {
        transition: 0.4s;
    }
    
    
    .accordion:before {
        margin-top: -3px;
        content: '\02795';
    }
    
    .accordion.active:before {
        content: "\2796";
    }
    
    div.panel {
        max-height: 0;
        overflow: hidden;
        transition: 0.6s ease-in-out;
        opacity: 0;
    }
    
    div.panel.show {
        opacity: 1;
        max-height: 500px;
    }
    
    .list__item__center {
        padding-left: 5px;
    }

These 3 allow an accordion to work.  You can add as many as you need as the code works off the CSS classes.  Good luck!
