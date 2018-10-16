import React, { Component } from 'react';
class Todo extends Component{
    constructor(props){
        super(props);
        this.actionTeaxtBox = React.createRef();
        this.errorMsg = React.createRef();
        this.state = {
            todo:[],
            completed:[],
            msg:false,
            msgerror:false,
        };
        this.toDoComplete = this.toDoComplete.bind(this);
        this.toDoIncomplete = this.toDoIncomplete.bind(this);
        this.createToDoList = this.createToDoList.bind(this);
        this.handlekeyUp = this.handlekeyUp.bind(this);
        this.hideError = this.hideError.bind(this);
    }
    errorCheck(msg,ststus){
        this.errorMsg.current.firstElementChild.innerText = msg;
        this.setState({
            msg:true,
            msgerror:ststus
        });

        //setTimeout(()=>(this.hideerror()),3000);
    }
    hideError(){
        this.setState({
            msg:false,
        }); 
    }
    createToDoList(){
        let _todo = this.actionTeaxtBox.current.value.trim();
        if(_todo !== '' && this.state.todo.indexOf(_todo) === -1){
            this.state.todo.push(_todo);
            this.setState({
                todo:this.state.todo
            });
            this.errorCheck(`You added a new To do item : "${_todo}".`,false);
        }else if(this.state.todo.indexOf(_todo) > -1){
            this.errorCheck(`"${_todo}" : This item already added.`,true);
        }
        else{
            this.errorCheck('Please enter to do item.',true);
        }
        this.actionTeaxtBox.current.value = '';
        this.actionTeaxtBox.current.focus();
    }
    handlekeyUp(event){
        if(event.keyCode === 13){
            this.createToDoList();
        }
    }
    toDoComplete(event){
        let toDoItem = event.currentTarget.getAttribute('value');
        let indexOfItem = this.state.todo.indexOf(toDoItem);
        
        //Remove Completed work
        this.state.todo.splice(indexOfItem, 1);
        let newToDoList = this.state.todo;
        //Add Completed work
        this.state.completed.push(toDoItem);
        let newCompleted = this.state.completed;
        this.setState({
            todo:newToDoList,
            completed:newCompleted
        });
        this.errorCheck(`Congratulation! You completed your To do item : "${toDoItem}".`,false);
    }
    toDoIncomplete(event){
        let notDoneItem = event.currentTarget.getAttribute('value');
        let indexOfItem = this.state.completed.indexOf(notDoneItem);
        
        //Remove not Completed work
        this.state.completed.splice(indexOfItem, 1);
        let newCompleted = this.state.completed;
        //Add not Completed work
        this.state.todo.push(notDoneItem);
        let newToDoList = this.state.todo;
        this.setState({
            todo:newToDoList,
            completed:newCompleted
        });

        this.errorCheck(`you moved completed item : "${notDoneItem}" to your To do list.`,true);
    }
    componentWillMount(){
        console.log('componentWillMount()');
    }
    componentWillUpdate(){
        console.log('componentWillUpdate()');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate()');
    }
    componentDidMount(){
        console.log('componentDidMount()');
        this.setState({
            // todo:["Buy egg","Breakfast","Car wash","Gardaning"],
            // completed:["wake up 7:00Am","Brush teeth"]
            todo:[],
            completed:[]
        });
    }
    render(){
        return(
            <div className="todo-component">
                <div className="todo-add-container">
                    <p ref={this.errorMsg} 
                       className={this.state.msg ? `msg show ${this.state.msgerror ? " error":" sucess"}`:`msg hide ${this.state.msgerror ? " error":" sucess"}`}
                    ><span className="msg-span">Error Message!!</span><button className="msg-closebtn" onClick={this.hideError}>x</button></p>

                    <p><input ref={this.actionTeaxtBox} className="todo-textbox" type="text" placeholder="type here and press enter" onKeyUp={this.handlekeyUp}/></p>
                    <button className="btn todo-action-btn" onClick={this.createToDoList}>Add</button>
                </div>
                { this.state.todo.length > 0 || this.state.completed.length > 0 ?
                    <div className="todo-list-container">
                        <div className="width50per displayInlineBlock todo-list">
                            <h2 className="App-todo-heading">To do <span className="count">{this.state.todo.length}</span></h2>
                            <ul className="list">  
                                {
                                    this.state.todo.length > 0 ? 
                                    this.state.todo.map((list,index) => (<li key={index}><span>{list}</span><button className="btn btn-done right" onClick={this.toDoComplete} value={list}>Done</button></li>)) :
                                    <li className="nochild">No To do item</li>
                                }
                            </ul>
                        </div>
                        <div className="width50per displayInlineBlock completed-list">
                            <h2 className="App-compt-heading">Completed <span className="count">{this.state.completed.length}</span></h2>
                            <ul className="list">
                                {
                                    this.state.completed.length > 0 ? 
                                    this.state.completed.map((list,index) => (<li key={index}><del>{list}</del><button className="btn btn-done right btn-notdone" onClick={this.toDoIncomplete} value={list}>Not done</button></li>)) :
                                    <li className="nochild">No Completed item</li>
                                }
                            </ul>
                        </div>
                    </div> : null
                }
            </div>
        )
    }

}

export default Todo;
