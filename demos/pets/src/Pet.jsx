import PropTypes from 'prop-types';

function Pet(props) {
  return (
    <div>
      <div
        style={{
          fontSize: '6em',
          padding: '5px',
          top: props.position?.y,
          left: props.position?.x,
          position: 'relative',
        }}
      >
        🐈
      </div>
    </div>
  );
}
Pet.propTypes = {
  name: PropTypes.string,
  position: PropTypes.object,
};
export default Pet;
