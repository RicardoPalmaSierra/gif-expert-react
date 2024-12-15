import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewValue(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={onInputChange} />
        </form>
    )
}