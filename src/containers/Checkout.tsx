import React, { RefObject, SyntheticEvent } from "react";

type Props = {};
type State = { name: string; email: string };

class Checkout extends React.Component<Props, State> {
  emailRef: RefObject<HTMLInputElement>;
  state: State = { name: "", email: "" };
  constructor(props: any) {
    super(props);
    this.emailRef = React.createRef<HTMLInputElement>();
  }

  saveData = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("Form submitted", this.state, this.emailRef.current?.value);
  };
  render() {
    return (
      <form onSubmit={this.saveData}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        {this.state.name === "" ? <small>Name is required</small> : null}

        <label>Email</label>
        <input
          type="text"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        {this.state.email === "" ? <small>Email is required</small> : null} 

        <button>Submit</button>
      </form>
    );
  }
}
export default Checkout;
