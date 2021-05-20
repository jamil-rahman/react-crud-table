import React, { Component } from 'react';
import {ProductConsumer, ProductProvider} from './Context';


export default class Table extends Component{
    render() {
        return (
            // populating my table
            <div className="container">
                <h1>My Table</h1>
                <ProductConsumer>
                    {(value) => {
                        return(
                            <table className="container" style={{width:'50%'}}>
                                    <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Category</th>
                                    </tr>
                                    <tr>
                                            <td><input className="input" type="text" value={value.name} onChange={(e) => {value.updateValue(e, 'name')}} /></td>
                                            <td><input className="input" type="text" value={value.price} onChange={(e) => {value.updateValue(e, 'price')}} /></td>
                                            <td><input className="input" type="text" value={value.quantity} onChange={(e) => {value.updateValue(e, 'quantity')}} /></td>
                                            <td><input className="input" type="text" value={value.category} onChange={(e) => {value.updateValue(e, 'category')}} /></td>
                                            <td><button id ="add-btn"onClick={()=>{value.onSave(value.id)}}>{value.id ? "Save" : "Add New Item"}</button></td>
                                    </tr>
                                {value.data.map(product => {
                                    return (
                                        <tr>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.category}</td>
                                            <td><button onClick={()=>{value.onEdit(product.id)}}>Edit</button></td>
                                            <td><button onClick={()=>{value.onDelete(product.id)}}>Delete</button></td>
                                        </tr> 
                                    )
                                })}
                            </table>
                        )
                    }
                    }
                </ProductConsumer>
            </div>
        )
    }
}