import React from "react";
import Item from '../Item/Item'
import {Table} from 'react-bootstrap'
import PropTypes from 'prop-types'

const ItemList = ({ products }) => {
const handleClick=(name)=>{alert(`The product name is ${name}`)}
  return (
    <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {products.map((item,index)=><Item item={item} key={index} handleClick={handleClick}/>)}
        </tbody>
      </Table>
    </div>
  );
};
ItemList.propTypes={
    products:PropTypes.array
}

export default ItemList;
