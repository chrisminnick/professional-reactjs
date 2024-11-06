import PropTypes from 'prop-types';

function Pet(props) {
  let petIcon;
  switch (props.type) {
    case 'Cat':
      petIcon = '🐈';
      break;
    case 'Dog':
      petIcon = '🐕';
      break;
    case 'Fish':
      petIcon = '🐟';
      break;
    case 'Bird':
      petIcon = '🐦';
      break;
    default:
      petIcon = '🐾';
  }
  return (
    <div>
      <div
        style={{
          fontSize: '6em',
          padding: '5px',
          top: props.position?.y,
          left: props.position?.x,
          position: 'absolute',
        }}
      >
        {petIcon}
      </div>
    </div>
  );
}
Pet.propTypes = {
  name: PropTypes.string,
  position: PropTypes.object,
  type: PropTypes.string,
};
export default Pet;
