// To use, just include this file and then call the appropriate functions.

window.ls = {}

ls.init = function(item,value){
    if (localStorage.getItem(item) === null) {
      localStorage.setItem(item, value);
    }
};

ls.get = function(item){
  return localStorage.getItem(item);  
};

ls.set = function(item,value){
  return localStorage.setItem(item,value);  
};

ls.event = function(item,event,value){
    document.getElementById(item).addEventListener(event, function(e) {
        localStorage.setItem(item, value); 
    });  
};
