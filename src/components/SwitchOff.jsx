const SwitchOff = (props) => {
  console.log(props);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          className="switchoff"
          onClick={() => {
            props.setSwitch1(false);
            props.setSwitch2(false);
            props.setSwitch3(false);
          }}
        >
          SWITCH OFF
        </button>
      </div>
    </>
  );
};

export default SwitchOff;
