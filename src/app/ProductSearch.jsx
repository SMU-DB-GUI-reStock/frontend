import React from 'react';

export class ProductSearch extends React.Component {
    state = {
        product_type_name: ''
    }

    render(){
        return <div className="card mt-3 mb-3">
        <div className="card-body">
            <h3 className="card-title">Search for a Product</h3>
            <div className="form-group">
                <label htmlFor="search_name">Name</label>
                    <input type="text"
                        id="search_name"
                        name="search_name"
                        className="form-control"
                        value={ this.state.name }
                        onChange={ e => this.setState( { product_type_name: e.target.value } ) } />
            </div>
            <div className="mt-2">
                <button type="button" 
                className="btn btn-primary" 
                onClick={ () => this.props.onSearch(this.state) }>
                    Search
                </button>
            </div>
        </div>
    </div>
    }
}