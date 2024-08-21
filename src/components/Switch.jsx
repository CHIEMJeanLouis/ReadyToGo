const Switch = (props) => {
  console.log(props);

  return (
    <>
      <div>
        {props.switch === true ? (
          <button className="whiteviolet" onClick={() => props.setSwitch(true)}>
            ON
          </button>
        ) : (
          <button className="blueviolet" onClick={() => props.setSwitch(true)}>
            ON
          </button>
        )}

        {props.switch === false ? (
          <button
            className="whiteviolet"
            onClick={() => props.setSwitch(false)}
          >
            OFF
          </button>
        ) : (
          <button className="blueviolet" onClick={() => props.setSwitch(false)}>
            OFF
          </button>
        )}
      </div>
      <div></div>
    </>
  );
};

export default Switch;
