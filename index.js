let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date( startDate );

  }
  yearsExperienceFromBeginningOf (endYear){
        return endYear - this.startDate.getFullYear() - 1;
    }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled() {
    let verticalHorizontal = this.endingLocation.vertical - this.beginningLocation
    let horizontalDistance = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    return verticalDistance + horizontalDistance
  }
}


