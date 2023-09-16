"use strict";
exports.__esModule = true;
var taskOne = function (passengers, shuffle) {
    var reservation = [];
    var boarded = [];
    var manifest = [];
    var count = 0;
    var locations = ["Abuja", "Benue", "Lagos", "katsina", "Sambisa"];
    //Loop to generate passenger list
    for (var i = 0, j = 0; i < passengers; j++, i++) {
        var obj = {
            name: "passenger".concat(i + 1),
            location: locations[j]
        };
        manifest.push(obj);
        // resets j so it restarts
        if (j > 3) {
            j = -1;
        }
    }
    ;
    //Puts passengers from the manifest to the reservation array
    if (manifest.length % 5 !== 0) {
        reservation = manifest.splice(-(manifest.length % 5));
    }
    while (manifest.length > 0) {
        if (manifest.length > 50) {
            boarded = manifest.splice(0, 50);
        }
        else {
            boarded = manifest.splice(0);
        }
        if (shuffle === 0 && manifest.length) {
            reservation = manifest.splice(0);
        }
        count++;
        shuffle--;
    }
    return {
        boarded: boarded,
        reservation: reservation,
        count: count
    };
};
// console.log(taskOne(63, 1))
exports["default"] = taskOne;
