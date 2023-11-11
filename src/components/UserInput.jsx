export default function UserInput(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => props.onChangeInitialInvestment(e.target.value)}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(e) => props.onChangeAnnualInvestment(e.target.value)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(e) => props.onChangeExpectedReturn(e.target.value)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(e) => props.onChangeDuration(e.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
