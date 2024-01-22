import React from 'react';
import { Container } from './styles';

export function Textarea({ value, label, onChange, ...rest }) {
    return (
        <div>
            {label && <label htmlFor={rest.id}>{label}</label>}
            <Container {...rest} onChange={onChange} defaultValue={value} />
        </div>
    );
}