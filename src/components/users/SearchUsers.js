import React, { Component } from 'react'

export class SearchUsers extends Component {
    render() {
        return (
            <form className="mb-2">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search users..."/>
                </div>
                <button className="btn btn-success btn-block">Search</button>
            </form>
            
        )
    }
}

export default SearchUsers
