import React, { Component } from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleChangetitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        // kiểm tra 2 ô nhập vào không được để trống
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing requireed params')
            return;
        }
        console.log('>>>check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary

        })
        // clear nội dung đã nhập vào 2 ô job's title và salary
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlfor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangetitleJob(event)}
                />
                <br />
                <label htmlfor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangesalary(event)}
                />
                
                <br/><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}
export default AddComponent;