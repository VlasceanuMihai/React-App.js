import React from "react";
import "./App.css";
import './LogoComponent';
import './Badge';
import LogoComponent from "./LogoComponent";
import Badge from "./Badge";
import Hello from "./Hello";
import CounterComponent from "./CounterComponent";

const badges = [
  {
    firstName: "Mihai",
    lastName: "Vlasceanu",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU"
  },
  {
    firstName: "Teodora",
    lastName: "Lavrig",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU"
  },
  {
    firstName: "Andreea",
    lastName: "Vlasceanu Antohi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU"
  }
];

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            counterValue: 0,
        };
    }

    render() {
        const counterValueText = "First counter value " + this.state.counterValue;
        return (
            <div id = "container">
              <Hello />
              <LogoComponent />
                <div>
                    <button 
                        onClick={(event) => {
                            this.setState((state, props) => {
                                return {
                                    counterValue: state.counterValue - 1,
                                };
                            });
                        }}
                    >
                        -
                    </button>

                    <span>{ counterValueText }</span>
                    <button
                        onClick={(event) => {
                            this.setState((state, props) => {
                                return {
                                    counterValue: state.counterValue + 1,
                                };
                            });
                        }}
                        >
                            +
                    </button>
                </div>

                <button
                    onClick={(event) => {
                        this.setState({ counterValue: 0});
                    }}
                    >
                        Reset counter
                </button>
                
                {badges.map(e => (
                  <Badge
                    firstName = {e.firstName}
                    lastName = {e.lastName}
                    avatar = {e.img}
                    />
                ))}

                <CounterComponent />
            </div>

        );
    }
}

export default App;