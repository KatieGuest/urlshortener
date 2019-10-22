class Form extends React.Component {
  render() {
    return (
      <div id="form-container">
        <form action="/" method="post">
          <input type="text" name="orig" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("form"));
