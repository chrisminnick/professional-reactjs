import PropTypes from 'prop-types';

function Aquarium(props) {
  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        border: '1px solid black',
        padding: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {props.children}
    </div>
  );
}

Aquarium.propTypes = {
  children: PropTypes.node,
};

export default Aquarium;
