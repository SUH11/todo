import React from 'react';

export default class FilterableProductTable extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
    this.onInStockOnlyChange = this.onInStockOnlyChange.bind(this);
  }
  onFilterTextChange(value) {
    this.setState({
      filterText: value
    });
  }
  onInStockOnlyChange(value) {
    this.setState({
      inStockOnly: value
    });
  }
  render() {
    return (
      <div className="filter-table">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.onFilterTextChange}
          inStockOnly={this.state.inStockOnly}
          onInStockOnlyChange={this.onInStockOnlyChange}/>
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor() {
    super(...arguments);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  handleFilterTextInputChange(ev) {
    this.props.onFilterTextChange(ev.target.value);
  }
  handleInStockInputChange(ev) {
    this.props.onInStockOnlyChange(ev.target.checked);
  }
  render() {
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               value={this.props.filterText}
               onChange={this.handleFilterTextInputChange}/>
        <p>
          <input type="checkbox"
                 checked={this.props.inStockOnly}
                 onChange={this.handleInStockInputChange}/>
          <span>Only show products in stock</span>
        </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach( product => {
      if ( product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if ( product.category !== lastCategory ) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    let name = this.props.product.stocked ?
               this.props.product.name :
               <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}