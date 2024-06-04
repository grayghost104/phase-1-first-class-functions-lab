// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    //return [names[0], names[1]]
    return names.slice(0,2)
    // return names.slice(0,-2)
}

const returnLastTwoDrivers = function(names){
    return names.slice(names.length -2,names.length)
}
    
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]
// selectingDrivers[0]()
// selectingDrivers[1]()

function createFareMultiplier(multiplier){
    // function multiplyByX(fare){
    //     return fare*multiplier
    // }
    // return multiplyByX
    
    return function(fare){
        return fare*multiplier
    }   
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(names, returnFunc){
     return returnFunc(names)
}