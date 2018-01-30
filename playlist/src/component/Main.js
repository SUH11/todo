import React from 'react';
import Item from './Item';

export default class Main extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        let data = this.props.data;
        return (
            <table className="main">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="checkAll" />
                            <label for="checkAll">全选</label>
                        </th>
                        <th>歌曲</th>
                        <th>歌手</th>
                        <th>收藏</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                { data.map(val => {
                    return <Item data={val} key={val.id} />;
                })}
                </tbody>
            </table>
        );
    }
}

