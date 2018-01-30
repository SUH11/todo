import React from 'react';

export default class Item extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        return (
            <tr className="like">
                <td>
                    <input type="checkbox" name=""/>
                </td>
                <td>{this.props.title}</td>
                <td>{this.props.singer}</td>
                <td>
                    <input type="checkbox" checked name=""/>
                </td>
                <td>
                    <a>X</a>
                </td>
            </tr>
        );
    }
}

