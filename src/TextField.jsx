import React from 'react';
import Container from '@luisgilgb/react-container';
import {isNonEmptyString} from '@luisgilgb/js-utils';
import {classNamer} from '@luisgilgb/react-utils';
import './TextField.css';

const DEFAULT_CLASS_NAME = 'reacttextfield';
const DEFAULT_LABEL_CLASS_NAME = `${DEFAULT_CLASS_NAME}-label`;
const DEFAULT_INPUT_CLASS_NAME = `${DEFAULT_CLASS_NAME}-input`;

const TextField = props => {
    const {
        value = '',
        label = '',
        className = '',
        labelClassName = '',
        inputClassName = '',
        hideLabel = false,
        forceLabelTag = false,
        flex,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        labelWidth,
        inputWidth,
        onChange: onChangeProp,
        ...otherProps
    } = props;

    const onChange = (e) => {
        const newValue = e.target.value;
        const oldValue = value;
        onChangeProp && newValue !== oldValue && onChangeProp(props, newValue, oldValue, e);
    }

    return (
        <Container
            className={classNamer(DEFAULT_CLASS_NAME, className)}
            layout="rowflex"
            flex={flex}
            width={width}
            minWidth={minWidth}
            maxWidth={maxWidth}
            height={height}
            minHeight={minHeight}
            maxHeight={maxHeight}
        >
            {!hideLabel && (forceLabelTag || isNonEmptyString(label)) && (
                <label
                    className={classNamer(DEFAULT_LABEL_CLASS_NAME, labelClassName)}
                    style={{
                        width: labelWidth,
                        minWidth: labelWidth,
                        maxWidth: labelWidth
                    }}
                >
                    {label}
                </label>
            )}
            <input
                {...otherProps}
                type="text"
                value={value}
                className={classNamer(DEFAULT_INPUT_CLASS_NAME, inputClassName)}
                onChange={onChange}
            />
        </Container>
    );
}

export default TextField;