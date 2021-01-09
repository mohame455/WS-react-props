import React from "react";
import PropType from 'prop-types';

const Item = ({ item, handleClick }) => {
  return (
    <>
      <tr>
        <td><button className='button' onClick={()=>handleClick(item.name)}>Click me</button></td>
        <td>
          <img src={item.imgSrc} alt={item.name} style={{width:'200px',height:'200px'}}/>
        </td>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    </>
  );
};

Item.propTypes={
    item:PropType.object,
    handleClick:PropType.func
}

export default Item;
