const taskOne = (passengers:number, shuffle:number)=>{
    type Passengers = {
        name: string;
        location: string;
    };

    let reservation: Passengers[] = []; 
    let boarded: Passengers[] = [];
    let manifest: Passengers[] = [];
    let count: number = 0;
    let locations: string[] = ["Abuja", "Benue", "Lagos", "katsina", "Sambisa"];

    //Loop to generate passenger list
    for (let i = 0 , j = 0; i < passengers; j++, i++){
        let obj: Passengers = {
            name:`passenger${i+1}`,
            location: locations[j]
        }

        manifest.push(obj);

        // resets j so it restarts
        if (j > 3) {
            j = -1;
        }
    };

    //Puts passengers from the manifest to the reservation array
    if (manifest.length % 5 !== 0) {
        reservation = manifest.splice(-(manifest.length % 5));
    }

    while (manifest.length > 0) {
        if (manifest.length > 50) {
            boarded = manifest.splice(0, 50);
        } else {
            boarded = manifest.splice(0)
        }
        if (shuffle === 0 && manifest.length ) {
            reservation = manifest.splice(0)
        }
        count++;
        shuffle--;
    }
    return {
        boarded: boarded,
        reservation: reservation,
        count: count
    } 
}

// console.log(taskOne(63, 1))

export default taskOne;