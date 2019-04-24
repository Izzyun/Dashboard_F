import React from 'react';

const InputWithLabel = ({name, id, value, onChange}) => {
    return (
        <div className="input-label">
            <label> {name} </label>
            <input 
                id = {id}
                value = {value}
                onChange = {onChange}
            />
        </div>
    )
}

export default InputWithLabel;