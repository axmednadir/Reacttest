import axios from 'axios'
import React, { Component } from 'react'


class AddUser extends Component {
    state ={
        user : null,
        editing : false
    }
    addUser = (event) => {
        const newuser = {
            userName : event.target.userName.value,
            userSurname : event.target.userSurname.value,
            userDescription: event.target.userDescription.value,
            userPassword: event.target.userPassword.value
        }
        console.log(newuser);
        event.preventDefault();
        this.props.addUser(newuser)
        
        event.target.userName.value = '';
        event.target.userSurname.value = '';
        event.target.userDescription.value = '';
        event.target.userPassword.value = '';
    }
    componentDidMount(){
       if (this.props.editRowId){

           axios.get('https://localhost:44371/api/Home/id?id=' + this.props.editRowId).then(c=>{
            this.setState({user : c.data , editing : true})
           })
       }
    }
    render() {
        return (
            <div className='card p-3 mb-3'>
                <form onSubmit={this.addUser} >
                    <div className='container mt-3 css'>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Name :</label>
                            <input type="text" className="form-control" placeholder="Name" name='userName' defaultValue={this.state.editing ?   this.state.user.userName : ''} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Surname :</label>
                            <input type="text" className="form-control" placeholder="Surname" name='userSurname' defaultValue={this.state.editing ?this.state.user.userSurname : ''} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" cols="3" rows="2" name='userDescription' defaultValue={this.state.editing ?this.state.user.userDescription : ''}></textarea>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" name='userPassword' defaultValue={this.state.editing ?this.state.user.userPassword : ''} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddUser