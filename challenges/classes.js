// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakers {
    constructor(length, width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
    let volume =  this.length * this.width * this.height;
    return volume;
    }
    surfaceArea(){
    let Area = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return Area;
    }

}
const cuboids = new CuboidMakers(4,5,5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakers {
    //surface Area = 6 * a * a
    //volume a *a *a
    constructor(length, width,height,edge,){
        super(length, width,height);
        this.edge = edge;
    }
    cubeSurfaceArea(edge){
        let Area = 6 *(this.edge * this.edge);
        return Area;
    }
    cubeVolume(edge){
        let volume = (this.edge * this.edge * this.edge)
        return volume;
    }
}
const cubes = new CubeMaker(1,2,3,4)
 console.log(cubes.cubeVolume());
