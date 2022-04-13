import React from 'react';
import logo from './logo.svg';
import './App.css';

type User = {
    id: string
    name: string
    email: string
    address: string
}

// PICKは選択する
type UserItemPick = Pick<User, "name" | "email">

// Omitはそれ以外
type UserItemOmit = Omit<User, "id" | "address">

const App = () => {

    const userPick: UserItemPick = {
        name: "hoge",
        email: "hoge@example.com",
    }
    const userOmit: UserItemOmit = {
        name: "hoge",
        email: "fuga",
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
