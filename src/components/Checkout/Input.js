import React from "react";
import {useField} from "formik";

const Input = ({name, labelText, ...rest}) => {
    const [field, meta] = useField(name);

    return (
        <div className="input-group">
            <label className="input-group__label">
                {labelText}
                {rest.required && <span className="input-group__required-mark"> *</span>}
            </label>
            <input {...field} {...rest} className="input-group__input" data-testid={"input-" + field.name}/>
            {meta.error && meta.touched && <span className="input-group__error">{meta.error}</span>}
        </div>
    )
}

export default Input;