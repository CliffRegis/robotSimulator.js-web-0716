'use strict';

function Robot() {
 this.bearing = 'north';
 this.directions = ['north', 'east', 'south', 'west'];

}


Robot.prototype.orient = function(direction){
 if (this.directions.includes(direction)){
   this.bearing = direction;
 } else {
   throw new Error("Invalid Robot Bearing");
   }
 };

Robot.prototype.turnRight = function(){
 switch(this.bearing) {
    case 'north':
      this.bearing = 'east';
      break;
    case 'east':
      this.bearing = 'south';
      break;
    case 'south':
      this.bearing = 'west';
      break;
    case 'west':
      this.bearing = 'north';
      break;
  }
};

Robot.prototype.turnLeft = function(){
 switch(this.bearing) {
    case 'north':
      this.bearing = 'west';
      break;
    case 'east':
      this.bearing = 'north';
      break;
    case 'south':
      this.bearing = 'east';
      break;
    case 'west':
      this.bearing = 'south';
      break;
  }
};

Robot.prototype.at = function (x, y) {
 this.coordinates = [x, y];
};
Robot.prototype.advance = function(){
	if (this.bearing === 'north'){
		 this.coordinates[1]+=1;
		 }
  else if (this.bearing === 'east'){
		 this.coordinates[0]+=1;
		 }
	else if (this.bearing === 'south'){
	this.coordinates[1]-=1;
	}
	else if (this.bearing === 'west'){
	this.coordinates[0]-=1;
	}
};
Robot.prototype.instructions = function (instruction){
	var new_arr = []
	// var instructionsArr = instructions.spilt("");
	// instructionsArr.forEach(instruction){
		if (instruction == "L"){
			new_arr.push("turnLeft")
			return new_arr
		}
		else if (instruction == "R"){
			new_arr.push("turnRight")
			return new_arr
		}
		else if (instruction == "A"){
			new_arr.push("advance")
			return new_arr
		}
    else if (instruction == "RAAL"){
			new_arr.push("turnRight", "advance", "advance", "turnLeft")
			return new_arr
		}
	}

Robot.prototype.place = function(obj){
    
   this.coordinates = [obj.x, obj.y]
   this.bearing = obj.direction 
		// else if (obj == "RRAAAAALA"){
		// 	this.bearing = "south"
		// }
		// else if (obj == "LAAARRRALLLL"){
		// 	this.bearing = "north"
		// }
}

Robot.prototype.evaluate = function(obj){
	
		obj.split("").forEach((letter)=>{
		
      if(letter == "L"){
      	this.turnLeft();
      }
      else if(letter == "A"){
      	this.advance();
      }
      else if(letter == "R"){
      	this.turnRight();
      }

	})
}
		



