import React, { Component } from 'react'
import axios from 'axios'
import '../Css/table.css'
import AddUser from './addUser'


class Table extends Component {
    state = {
        users: null,
        showForm: false,
        editRowId: null

    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = () => {
        axios.get('https://localhost:44371/api/home')
            .then(res => {
                this.setState({ users: res.data, showForm: false });
            })
            .catch(err => {
                console.log(err);
            });
    }
    addUser = (data) => {
        if (!this.state.editRowId){
            axios.post('https://localhost:44371/api/home', data)
                .then((res) => {
                    this.fetchUsers();
                })
                .catch((err) => {
                    console.log(err);
                });
        }else {
            axios.put('https://localhost:44371/api/Home/id?id=' + this.state.editRowId, data)
            .then((res) => {
                this.fetchUsers();
            })
            .catch((err) => {
                console.log(err);
            });
        }


    }
    deleteUser = (id) => {
        axios.delete("https://localhost:44371/api/Home/id?id=" + id).
            then((res) => {
                this.fetchUsers();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    editUser = (id) => {
        this.setState({ showForm: true, editRowId: id })
        
        }

    
    render() {
        return (
            <>
                <button className='btn btn-primary m-3 ms-auto d-block' onClick={() => this.setState({ showForm: !this.state.showForm , editRowId : null })}>
                    {
                        this.state.showForm ? "Show List" : "Add User"
                    }
                </button>
                {
                    this.state.showForm ?
                        <AddUser addUser={this.addUser} editRowId={this.state.editRowId} />
                        :
                        <div className="alma container mt-3">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>Number</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Description</th>
                                        <th>Password</th>
                                        <th>Delete</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        this.state.users != null ?
                                            this.state.users.map((user, index) => {
                                                return (
                                                    <tr key={user.userId}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.userName}</td>
                                                        <td>{user.userSurname}</td>
                                                        <td>{user.userDescription}</td>
                                                        <td>{user.userPassword}</td>
                                                        <td>
                                                            <button className='btn btn-delete' onClick={() => this.deleteUser(user.userId)}><i class="fa-solid fa-trash" ></i></button>
                                                        </td>
                                                        <td>
                                                            <button className='btn' onClick={() => this.editUser(user.userId)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                        </td>
                                                    </tr>)
                                            }) : ''
                                    }
                                </tbody>
                            </table>

                        </div>
                }
            </>
        )
    }
}
export default Table