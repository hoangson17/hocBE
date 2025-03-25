// Viết một class Car và Bicycle, cả hai đều có phương thức move(). Sau đó, viết một hàm start(vehicle) chỉ nhận những object có phương thức move().

class Car {
    move(){
      console.log("xe hơi đang chạy");
    }
  }
  
  class Bicycle {
    move(){
      console.log("xe đạp đang chạy");
    }
  }
  

  function start(vehicle) {
    if (typeof vehicle.move === "function") {
      vehicle.move();
    } else {
      console.log("Không thể di chuyển!");
    }
  }
  
  const car = new Car();
  const bike = new Bicycle();
  
  start(car); // Xe hơi đang chạy...
  start(bike); // Xe đạp đang chạy...
  start({}); // Không thể di chuyển!