import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
    state = {
        input: "",
        items:[]
    };
    handleChange = event => {
        this.setState({
            input : event.target.value
        });
    };

    storeItems = event =>{
        event.preventDefault();
        const { input } = this.state;
        const allItems = this.state.items;

        allItems.push(input);

        this.setState({
            items:allItems,
            input: ""
        });
    }

    deleteItem = key => {
        const allItems = this.state.items;

        allItems.splice(key,1);

        this.setState({
            items:allItems

        });
    };
  render() {
      const {input,items} = this.state;
      console.log(items);

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input type="text" value={input} onChange={this.handleChange} placeholder="Enter Items...." />
        </form>
        <ul>
        {
            items.map((data,index)=>(
                <li key={index}>{data}<i className="fas fa-trash-alt" onClick={() => this.deleteItem(index)}></i></li>
            ))
        }
        </ul>
      </div>
    );
  }
}
