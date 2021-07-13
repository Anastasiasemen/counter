import React, {Component} from 'react';
import CounterView from "../components/CounterView";

//import CounterLayout from "../components/CounterLayout/CounterLayout";

class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // parityType: "even",
            countValue:0,
        } /* автоматически завели наше состояние; конструктор класса, который устанавливает начальное состояние в this.state*/
    }
    /*все методы, которые будут вызываться на пользовательские действия: клик, изменения инпута, должны начинаться со слова handle */

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
    // handleParity = () => {
    //     return this.setState ((state) => {
    //         if (state.countValue % 2 !== 0) {
    //             return this.state ={parityType:"odd"}
    //         }
    //     })
    // }






    render() {
        return (
            <div>
               <CounterView
                   // parityType={this.state.parityType}
                   countValue={this.state.countValue}
                   handleIncrement = {this.handleIncrement}
                   handleDecrement = {this.handleDecrement}
                   handleReset = {this.handleReset}
                   // handleParity={this.handleParity}
               />

            </div>
        );
    }
}

export default CounterContainer;