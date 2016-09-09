var popover;
var firstRun=1;

ons.ready(function() {
    navigator.splashscreen.hide();
});

document.addEventListener("show", function(event){
    if(event.target.id=='pgHome') {
        if(!Boolean(firstRun)){
            localStorage.removeItem("currentChapter");
        }            
        if (localStorage.getItem("currentChapter") !== null && Boolean(firstRun)) {
            firstRun=0;
            document.getElementById('mainNavigator').pushPage('content/'+localStorage.getItem('currentChapter'));
        } 
    }
    if(event.target.id=='pgContent') {           
        if (localStorage.getItem("currentCarousel") !== null) {
            if($.isNumeric(localStorage.getItem("currentCarousel"))){
                document.getElementById('bookCarousel').setActiveCarouselItemIndex(localStorage.getItem('currentCarousel'));
            }
        } 
    }
});

document.addEventListener('postchange', function(ev) {
    localStorage.setItem("currentCarousel",ev.carousel._lastActiveIndex);
 });

        

ons.createPopover('search.html').then(function(element) {
  popover = element;
});

function show(id) {
  popover.show(id);
  document.getElementById("txtSearch").focus();
};

function goSearch(text){
    popover.hide();
    var src_str = $(".content").html();
    var term = text;
    term = term.replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*");
    var pattern = new RegExp("("+term+")", "gi");
    
    src_str = src_str.replace(pattern, "<mark>$1</mark>");
    src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"$1</mark>$2<mark>$4");
    
    $(".content").html(src_str);   
}

function goToChapter(chapter){
    document.getElementById('mainSplitter').left.toggle();
    document.getElementById('mainNavigator').pushPage('content/'+chapter);
    localStorage.setItem("currentChapter",chapter);
    firstRun=0;
}

function goToSwipeChapter(chapter){
    localStorage.setItem("currentCarousel",chapter-1);
    document.getElementById('mainSplitter').left.toggle();
    document.getElementById('mainNavigator').pushPage('content/book.html');
}
