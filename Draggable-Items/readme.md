## Multiple Item Drag (and drop) and the Splitter Component

If you are wanting to develop 2D games with Onsen UI or add draggable components to Onsen, you are in luck!  Onsen UI has the wonderful [Hammer.JS](http://hammerjs.github.io/) built-in.  It is a slightly modified version so when working with it, understand that the Hammer.JS documents do not work directly, but can be used to give you a general idea of what to expect or how to proceed.

## Setting up the initial items

To get started, you wrap the element you want to be able to drag in the `<ons-gesture-detector>` tag.  In this example, we used a simple image.  You can have multiple images in a single gesture detector and the only requirement is to add the `draggable` class to each item that you want to be available for dragging.

## Setting up the initial event listeners

In order to make this work and respond how the user would anticipate it working, it requires 2 event listeners with 1 being optional:  `dragstart`, `drag`, and `dragend`.  In order to utilize this across multiple items as well as the ability to dynamically add items, a loop is used to bind the listener to each item with the `draggable` class.

`dragstart` is used to set where the target object's initial position on the stage is.  This is required because during the `drag` event, the position is constantly updated and you will encounter a race condition where the position becomes exponentially larger and ultimately will be removed from the stage.

`drag` is used to physically moved the item by using the calculated event `delta` item.  This is simply added to the variable set on `dragstart` and we update the style of the target object.

`dragend` is not necessarily needed; however, it is used if you need to record where the event was dropped.  As written in the example, we simply update the variables for use at a later point, but this could be combined with the dynamic items section to do drop or detect where the object is, but this is outside the scope of this tutorial for now.

## Making this work with the Splitter component

Because the `ons-splitter` component also uses drag detection, a conflict is created between the two implementations.  In order to make this work effectively, I chose to disable the swipe capability of the splitter, but maintained an icon for toggling the menu.  The critical piece is `dispose()` which removes the event listeners for the menu itself.  This is done via:

    ons.GestureDetector(document.getElementById('menu')).dispose();

## Dynamically adding items to the stage

Although not the focus of this tutorial, a simple way to dynamically add items to the stage is to wrap the `ons-gesture-detector` in a `div` and then leverage the following code block:

    var newImg = document.createElement('img');
    newImg.setAttribute('src', item);
    newImg.setAttribute('class', 'draggable')
    document.getElementById('stage').appendChild(newImg);
    fn.enableGD();
       
The last line calls to add the event listeners to the objects with the `draggable` class.  Luckily, JavaScript skips objects that already have an event listener, so this can be called everytime without impact to performance.

## That is it!

Hopefully, this will help you add draggable items to your project.
