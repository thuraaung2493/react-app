import React from 'react';

// class Add extends React.Component {
//   input = React.createRef();

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.input}/>
//         <button onClick={() => {
//           this.props.add(this.input.current.value)
//         }}>+</button>
//       </div>
//     );
//   }
// }

const Add = props => {
  let input = React.createRef();

  return (
    <div>
      <input type="text" ref={input}/>
      <button onClick={() => {
        props.add(input.current.value)
      }}>+</button>
    </div>
  );
}

export default Add;