let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};

for (const key in statistics) {
    const element = statistics[key];
    if (key[0] === 'r'|| element%2 != 0){
        console.log(element)
    }
    
}