import './App.css';
import { Component } from 'react';

// reuse component
// ใช้การส่งข้อมูลจาก child -> parent โดยการใช้ callback function
// จัด style ให้ใกล้เคียงกับตัวอย่างที่สุด

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>โหวตอาหาร</h1>
        <Parent TypeOfFood="อาหารคาว" Food="ข้าวผัด" img="https://sv1.picz.in.th/images/2023/09/19/dWvUFGz.webp"/>
        <Parent TypeOfFood="อาหารหวาน" Food="ไอศครีม" img="https://sv1.picz.in.th/images/2023/09/19/dWvqzFP.webp"/>
      </div>
    );
  }
}

class Parent extends Component{

  state = {
    result : 'MIN',
  }

  handleCallback = (childData) =>{
    this.setState({result: childData})
  }

  render(){
    const {TypeOfFood, Food, img} = this.props;
    const {result} = this.state;
    return(
      <div class="grid-container">
        <div class="item1">
        <h4>{TypeOfFood}</h4>
        <h5>{Food}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
        </div>
        <div class="item2">
        <img src={img} alt=''></img>  
        </div>
        <div class="item3">
        <Child  parentCallback={this.handleCallback}/>
        <p class='result'>{result}</p>
        </div>  
      </div>
    );
  }
}

class Child extends Component{
state = {
  count: 0,
}

vote = () => {  
  if (this.state.count >= 10) {
    alert('Can not vote');
  } else {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
    this.props.parentCallback(newCount === 10 ? 'MAX' : newCount);
  }
}

unvote = () => {
  if (this.state.count <= 0) {
    alert('Can not unvote');
  } else {
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
    this.props.parentCallback(newCount === 0 ? 'MIN' : newCount);
  }
}
  render(){
    return(
      <div className='button'>
        <button class='bt1' onClick={this.vote}>click  to vote </button>
        <button class='bt2' onClick={this.unvote}>click  to unvote </button>
      </div>
    )
  }
}


export default App;
