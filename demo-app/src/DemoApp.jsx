import React from 'react';
import Container from '@luisgilgb/react-container';
import TextField from '../../src/TextField';
import './DemoApp.css';

function DemoApp() {
    return (
        <Container className="app">
            <header className="app-header">
                <p>
                    Edit <code>src/DemoApp.js</code> and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Container
                layout="center"
            >
                <Container
                    width={600}
                >
                    <TextField
                        label="TextField 1"
                    />
                    <TextField
                        label="TextField 2"
                    />
                    <TextField
                        label="TextField with labelWidth of 300"
                        labelWidth={300}
                    />
                    <TextField
                        label="Textfield with height of 200"
                        height={200}
                    />
                </Container>
            </Container>
        </Container>
    );
}

export default DemoApp;
