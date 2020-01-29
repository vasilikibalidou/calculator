function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}data = [
{ id: 'one', value: 1 },
{ id: 'two', value: 2 },
{ id: 'three', value: 3 },
{ id: 'add', value: '+' },
{ id: 'four', value: 4 },
{ id: 'five', value: 5 },
{ id: 'six', value: 6 },
{ id: 'subtract', value: '-' },
{ id: 'seven', value: 7 },
{ id: 'eight', value: 8 },
{ id: 'nine', value: 9 },
{ id: 'multiply', value: '*' },
{ id: 'clear', value: 'CRL' },
{ id: 'zero', value: 0 },
{ id: 'decimal', value: '.' },
{ id: 'divide', value: '/' },
{ id: 'equals', value: '=' }];


class NumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleClick",

    () => {

      this.props.handleDisplay(this.props.value);
    });}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("button", { id: this.props.id, onClick: this.handleClick }, this.props.value)));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "calculate",






    () => {
      try {
        this.setState({
          display: (eval(this.state.display) || '') + '' });

      } catch (e) {
        this.setState({
          display: "error" });
      }
    });_defineProperty(this, "clear",

    () => {
      this.setState({
        display: 0 });

    });_defineProperty(this, "operator",

    x => {
      if (this.state.display.slice(-1) === '+' || this.state.display.slice(-1) === '*' || this.state.display.slice(-1) === '/') {
        this.setState({
          display: this.state.display.slice(0, -1) + x });

      } else if (this.state.display.slice(-1) === '-') {
        if (this.state.display.slice(-2, -1) === '+' || this.state.display.slice(-2, -1) === '*' || this.state.display.slice(-2, -1) === '/' || this.state.display.slice(-2, -1) === '-') {
          this.setState({
            display: this.state.display.slice(0, -2) + x });

        }
      } else {
        this.setState({
          display: this.state.display + x });

      }
    });_defineProperty(this, "handleDisplay",

    button => {
      if (button === '=') {
        this.calculate();
      } else
      if (button === 'CRL') {
        this.clear();
      } else
      if (button === 0) {
        this.setState({ display: this.state.display + 0 });
      } else
      if (button === '.') {
        if (this.state.display.indexOf('.') === -1 || this.state.display.indexOf('+') !== -1 || this.state.display.indexOf('-') !== -1 || this.state.display.indexOf('*') !== -1 || this.state.display.indexOf('/') !== -1) {
          this.setState({ display: this.state.display + '.' });
        }
      } else
      if (button === '+' || button === '*' || button === '/') {
        this.operator(button);
      } else

      {
        this.setState({ display: (this.state.display + button.toString()).replace(/^0+/, '') });
      }
    });this.state = { display: 0 };}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "calc", class: "container" },
      React.createElement("div", { id: "display" }, this.state.display),
      data.map((i) =>
      React.createElement(NumPad, { id: i.id, value: i.value, handleDisplay: this.handleDisplay })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));