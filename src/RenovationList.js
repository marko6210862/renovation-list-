import { Component } from "react";
import check from './add.png';

class RenovationList extends Component{
    state = {
        userInput: '',
        renovationList: []
    }

onChangeEvent(event){
        this.setState({userInput:event});
    }

addItem(input) {
    if (input === ''){
        alert ("Please enter in item")
    } 
    else {
    let listArray = this.state.renovationList;
    listArray.push(input);
    this.setState({renovationList: listArray, userInput: ''})
}
}

deleteItem() {
    let listArray = this.state.renovationList;
    listArray = [];
    this.setState({renovationList: listArray})
}

crosseWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e){
    e.preventDefault();
}


    render (){
        return(
        <div>
            
            <form onSubmit={this.onFormSubmit}>
                
                <div className="ConteinerTwo">
                    <div className="ConteinerSearch">
                        <input tupe="text"
                            placeholder="What do you want to buy for renovation?"
                            onChange={(e) => {this.onChangeEvent(e.target.value)}}
                            value={this.state.userInput}/>
                    </div> 
                    
                    <div>
                        <button onClick={() => this.addItem(this.state.userInput)} className="btnAdd">Add</button>
                    </div> 
                    
                    <div>
                        <button onClick = {() => this.deleteItem()} className="btnDel">Delete all</button>
                    </div>
                         
                </div>
            
            <ul>
                {this.state.renovationList.map((item, index) => (
                    <li onClick={this.crosseWord} key={index}>
                        <img src={check} width="40px" alt="check"/>{item}
                    </li>
                ))}
            </ul>
            </form>
        </div> 
        )

        
    } 
    
}

export default RenovationList;


