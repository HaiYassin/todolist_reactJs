import React, { Component } from 'react'

export default class ToDo extends Component {

  state = {
    element : '',
    items: []
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      element: '',
      items: [...this.state.items, {element: this.state.element}]
    })
  }

  deleteItem = index => {
    const arr = this.state.items

    arr.splice(index, 1)
    this.setState({
      items: arr
    })
  }

  renderToDo = () => {
    return this.state.items.map( (item, index) => {
      return (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h4 style={{display:'inline'}}>{item.element}</h4>
            <i 
              className="fas fa-times"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'red'
              }}
              onClick={() => this.deleteItem(index)}
            ></i>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="card my-3">
          <div className="card-header">ToDolist</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="element">Chose(s) à faire</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="element"
                  onChange={this.onChange}
                  value={this.state.element}
                />
              </div>
              <button className="btn btn-primary btn-block">
                Ajouter une tâche
              </button>
            </form>
          </div>
        </div>
        {this.renderToDo()}
      </React.Fragment>
    )
  }
}
