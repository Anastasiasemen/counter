import React, {Component} from 'react';
import CounterView from "../components/CounterView";

//import CounterLayout from "../components/CounterLayout/CounterLayout";

class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // parityType: "even",
            countValue:0,
        }
    }
   

    handleIncrement = () => {
        this.setState( (state) => {
            const incrementedValue = state.countValue + 1;

            return {
                countValue: incrementedValue
            }
        })

    }
    handleDecrement = () => {
        this.setState( (state) => {

            const decrementedValue = Math.max(state.countValue - 1, 0);
            return {
                countValue: decrementedValue
            }
        })

    }
    handleReset = () => {
        this.setState( () => {
            return this.state = {
                countValue:0
            }
        })
    }







    render() {
        return (
            <div>
               <CounterView
                  
                   countValue={this.state.countValue}
                   handleIncrement = {this.handleIncrement}
                   handleDecrement = {this.handleDecrement}
                   handleReset = {this.handleReset}
               />

            </div>
        );
    }
}

export default CounterContainer;
