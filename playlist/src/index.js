import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends React.Component {
    render() {
        return (
            <div id="musicApp">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
