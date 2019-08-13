import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default () => (
    <div>
        <InputGroup>
            <FormControl
                placeholder="Enter amount of tokens you want to purchase"
            />
            <InputGroup.Append>
                <InputGroup.Text>
                    ES
                </InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    </div>
);