## This is a code snippet that requires jQuery (I know, I hate using it too!)

For when you need to inspect event objects returned in a mobile device, but do not have the ability to utilize Monaca's
USB debugging since it requires a constant WiFi connection.

The code is not commented and was heavily modified from the source :  http://www.codeproject.com/Articles/24549/How-to-Inspect-a-JavaScript-Object

The function requires 4 options and is called as such:

`document.getElementById('log').innerHTML = inspect(obj, maxLevels, level, val)` just have an empty `div` with an id of log or whatever for the function to pass the data.

`obj` is the object you are passing in to be inspected

`maxlevels` is how deep you want it to go.  Just note that going beyond 4 puts some serious drain on the device.

`level` is the starting point of inspection and should pretty much always be 0 unless you want to start deeper in your object.

`val` is if you want to show the value held in the object.  This should pretty much always be false as setting it to true can also drain your device.
