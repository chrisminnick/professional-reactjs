function Asteroid({ element }) {
  let approach = element.close_approach_data[0];
  let distance = approach.miss_distance.kilometers;
  let speed = approach.relative_velocity.kilometers_per_hour;
  let size = element.estimated_diameter.meters.estimated_diameter_max;
  let hazardous = element.is_potentially_hazardous_asteroid;

  let asteroidStyle = {};
  if (size > 100) {
    asteroidStyle.fontSize = size / 10 + 'px';
  } else {
    asteroidStyle.fontSize = size + 'px';
  }
  asteroidStyle.marginLeft = distance / 100000 + 'px';
  if (speed > 50000) {
    asteroidStyle.textShadow =
      '0px 0px 10px cyan, 1px 5px 15px cyan, 2px 10px 20px cyan, 3px 15px 20px cyan, 3px 20px 20px cyan, 3px 25px 20px cyan';
  } else if (speed > 25000) {
    asteroidStyle.textShadow =
      '0px 0px 10px cyan, 1px 5px 15px cyan, 2px 10px 20px cyan';
  } else {
    asteroidStyle.textShadow = '0px 0px 10px cyan, 3px 5px 15px cyan';
  }
  if (hazardous) {
    asteroidStyle.color = 'red';
  }
  console.log(asteroidStyle);

  return (
    <div style={asteroidStyle} className="asteroid">
      *
    </div>
  );
}
export default Asteroid;
