import React, {useState} from 'react';
import Container from '@luisgilgb/react-container';
import TextField from '../../src/TextField';
import './DemoApp.css';

const createDefArray = () => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr[i] = `Default value ${i}`;
    }
    return arr;
}

function DemoApp() {
    const [values, setValues] = useState(createDefArray());

    const setValueFor = (newValue, index) => {
        let draft = [...values];
        draft[index] = newValue;
        setValues(draft);
    }

    const textFieldPropsFromState = i => ({
        value: values[i],
        onChange: (tfProps, newValue) => {
            setValueFor(newValue, i);
        }
    })

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
                        {...textFieldPropsFromState(0)}
                        label="TextField 1"
                    />
                    <TextField
                        {...textFieldPropsFromState(1)}
                        label="TextField 2"
                    />
                    <TextField
                        {...textFieldPropsFromState(2)}
                        label="Width 300"
                        width={300}
                    />
                    <TextField
                        {...textFieldPropsFromState(3)}
                        label="Width 700"
                        width={700}
                    />
                    <TextField
                        {...textFieldPropsFromState(4)}
                        label="TextField with labelWidth of 300"
                        labelWidth={300}
                    />
                    <TextField
                        {...textFieldPropsFromState(5)}
                        label="Textfield with height of 200"
                        height={200}
                    />
                    <TextField
                        {...textFieldPropsFromState(6)}
                        placeholder="Without label"
                    />
                    <TextField
                        {...textFieldPropsFromState(7)}
                        forceLabelTag
                        placeholder="Without label but with forceLabelTag"
                    />
                    <TextField
                        {...textFieldPropsFromState(8)}
                        hideLabel
                        label="Hidden"
                        placeholder="With label but also hideLabel"
                    />
                </Container>
            </Container>
        </Container>
    );
}

export default DemoApp;
