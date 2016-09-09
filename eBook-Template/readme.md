# eBook Template with swipe-able chapters or sliding menu chapters and highlighting search

Note:  This was thrown together as an example.  There are some poor coding practices that I am not proud of.  Maybe someday I will come back and edit out the rediculous Boolean(variable) because I set the variable to an integer.  Originally, I was planning on doing something different, but alas, it ended up into that monstrosity.  Enjoy!

To get this template going, you only need to edit the files in the content folder.

To add your cover image, just replace the cover.png file with your own.

You have 2 options for chapters.  One can be selecting a chapter and scrolling down and the other can be swiped through the chapters.

Swiping chapters requires a bit more effort to add the chapters to the menu as you will need to edit book.html and menu.html.
It is important that all file names match throughout the files you edit.

Description of files in the content folder:

cover.png -> The image file displayed on app load (home screen).
book.html -> Base file that displays swipe_chapterX.html files.
    swipe_chapter1.html -> File that has content for swipe.
    swipe_chapter2.html -> File that has content for swipe.

chapter1.html -> File that has content for regular scrolling.
chapter2.html -> File that has content for regular scrolling.

menu.html -> File that contains the menu with links to chapters.
