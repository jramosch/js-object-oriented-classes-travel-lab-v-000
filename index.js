class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate) - startDate.getFullYear();
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    let horizontalTotal = Math.abs(parseInt(this.beginningLocation.horizontal) - parseInt(this.endingLocation.horizontal))
    
    if (this.beginningLocation.vertical === this.endingLocation.vertical) {
      return horizontalTotal;
    } else {
      
    }
  }
}