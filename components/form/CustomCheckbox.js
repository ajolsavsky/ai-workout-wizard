import React from 'react';

export default function CustomCheckbox({ id, label, values, selectedValues, onChange }) {
    const handleChange = (value) => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];

        onChange(updatedValues);
    };
    return (
        <>
            <label htmlFor={id} className="block text-sm font-light leading-6">
                {label}
            </label>
            <div className="mt-2">
                {values.map(({ value, title }) => (
                    <div key={value} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`${id}-${value}`}
                            checked={selectedValues.includes(value)}
                            onChange={() => handleChange(value)}
                            className="form-checkbox mr-2"
                        />
                        <label htmlFor={`${id}-${value}`}>{title}</label>
                    </div>
                ))}
            </div>
        </>
    )
}