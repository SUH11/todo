import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';


class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data:[
                {
                    id: 0,
                    title: "空白格",
                    singer: "蔡健雅",
                    selected: true,
                    like: false
                },
                {
                    id: 1,
                    title: "空白格222",
                    singer: "蔡健雅222",
                    selected: true,
                    like: true
                },
                {
                    id: 2,
                    title: "空白格3333",
                    singer: "蔡健雅3333",
                    selected: true,
                    like: true
                },
                {
                    id: 3,
                    title: "空白格333",
                    singer: "蔡健雅333",
                    selected: true,
                    like: false
                }
            ]
        };
    }
    render() {
        return (
            <div id="musicApp">
                <Header />
                <Main data={this.state.data} />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
