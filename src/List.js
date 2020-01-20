import React, { Component } from 'react';
import Item from './Item';
import './List.css'
export default class List extends Component {
    
    state = {
        newDishName:"",
        newIngredients:"",
        Dishes:[]
        
    }

    updateNewDish = (event) => {
        const newItem = event.target.value;
        this.setState({newDishName: newItem})

    }
    updateNewIngredients = (event) => {
        const newIngredients = event.target.value;
        this.setState({newIngredients: newIngredients})
    }

    addItemHandler = () => {
        const dishName = this.state.newDishName;
        const ingName = this.state.newIngredients
        const newDish = {
            name: dishName,
            ingredients: ingName
        };
        this.setState(prev => ({Dishes: [...prev.Dishes, newDish]}))
        this.setState({newDishName: "", newIngredients:""})

    }

    deleteItemHandler = (index)=>{
        const newDishes = [...this.state.Dishes]
        newDishes.splice(index, 1);
        this.setState({Dishes: newDishes})
    }

 



    render() {
        const dishItem = this.state.Dishes.map((dish, index)=>{
            return (
                <ol>
                    <Item 
                        number = {index+1}
                        dishName = {dish.name}
                        delete = {()=>this.deleteItemHandler(index)}
                        key = {index}
                        ingName = {dish.ingredients}
                        />
                </ol>
            )
        })
        return (
            <div className = "listAppContainer">
                <p>Add a dish to your List</p>
                    <input 
                        type = "text"
                        placeholder = "Type dish here"
                        value = {this.state.newDishName}
                        onChange = {event => this.updateNewDish(event)}
                    />
                     <input 
                        type = "text"
                        placeholder = "Type ingredients here"
                        value = {this.state.newIngredients}
                        onChange = {event => this.updateNewIngredients(event)}
                    />
                    <button 
                        onClick = {this.addItemHandler}
                    >ADD</button>
                <div>
                    {dishItem}
                </div>
               
                
            </div>
        )
    }
}
