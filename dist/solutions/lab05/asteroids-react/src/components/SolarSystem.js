function SolarSystem({ children }) {
  return (
    <div className="solar-system">
      <span>
        <img id="earth" src="/images/earth.jpg" />
      </span>
      {children}
    </div>
  );
}

export default SolarSystem;
