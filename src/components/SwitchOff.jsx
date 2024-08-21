const SwitchOff = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button
          className="switchoff"
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          SWITCH OFF
        </button>
      </div>
    </>
  );
};

export default SwitchOff;
