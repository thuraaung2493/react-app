import React from 'react';

// class Item extends React.Component {
//   render() {
//     return (
//       <li>
//         {this.props.name}

//         <button onClick={() => {
//           this.props.remove(this.pro)
//         }}>&times;</button>
//       </li>
//     );
//   }
// }

const Item = props => {
  return (
    <li>
      {props.name}

      <button onClick={() => {
        props.remove(props.name)
      }}>&times;</button>
    </li>
  );
}

export default Item;