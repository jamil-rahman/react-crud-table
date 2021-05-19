import React, { Component } from 'react';
import {rowData} from './defaultData'

const ProductContext =  React.createContext();

class ProductProvider extends Component {
    state = {
            data : rowData,
            id : '',
            name : '',
            price: '',
            quantity: '',
            category: '',
            udpateEdit: []
      }
      getItem = (id) => {
          const item = this.state.data.find(item => item.id === id);
          return item;
      }
      onEdit = (id) =>{
          const tempItem = this.state.data;
          const index = tempItem.indexOf(this.getItem(id));
          const selectedItem = tempItem[index];
          this.setState({
              id: selectedItem['id'],
              name: selectedItem['name'],
              price: selectedItem['price'],
              quantity: selectedItem['quantity'],
              category: selectedItem['category'],
          })
      }
      updateValue = (e, test) => {
          if (test === 'name') {
              this.state.name = e.target.value;
          }
          if (test === 'price') {
            this.state.price = e.target.value;
        }
        if (test === 'quantity') {
            this.state.quantity = e.target.value;
        }
        if (test === 'category') {
            this.state.category = e.target.value;
        }
        const tempItemDetails = [this.state.id, this.state.name, this.state.price, this.state.quantity, this.state.category]; 
        this.setState({
            updateEdit : tempItemDetails
        })

      }
      onSave = (id) =>{
          if(id!==""){
              const savedItem = this.state.data;
              const index = savedItem.indexOf(this.getItem(id));
              const item = savedItem[index];
              item['name'] = this.state.updateEdit[1];
              item['price'] = this.state.updateEdit[2];
              item['quantity'] = this.state.updateEdit[3];
              item['category'] = this.state.updateEdit[4];
              this.setState({
                  data: [...this.state.data],
                  id : "", name : "", price : "", quantity : "", category : ""
              })

          }

      }
    render() { 
        return ( 
            <div>
                <ProductContext.Provider
                value = {{...this.state, 
                onEdit: this.onEdit,
                onSave: this.onSave,
                updateValue: this.updateValue}}
                >
                    {this.props.children}
                </ProductContext.Provider>
            </div>
         );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }