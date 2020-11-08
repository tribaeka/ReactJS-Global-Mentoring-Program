import React, { useMemo } from 'react';
import { Field } from 'formik';
import styles from '../MovieForm.module.scss';

export interface MovieFormFieldProps {
    labelTitle: string;
    fieldName: string;
    placeholder: string;
    errors: { [key: string]: any };
    touched: { [key: string]: any };
    type?: string;
}

const MovieFormField: React.FC<MovieFormFieldProps> = (
    {
        labelTitle,
        fieldName,
        placeholder,
        errors,
        touched,
        type = 'text'
    }
) => {
    const formInput = useMemo(() => {
        if (type === 'textarea') {
            return <Field as="textarea"
                          className={styles.formInput}
                          name={fieldName}
                          type={type}
                          rows="4"
                          placeholder={placeholder}/>
        } else {
            return <Field as="input"
                          className={styles.formInput}
                          name={fieldName}
                          type={type}
                          placeholder={placeholder}/>
        }
    }, [type]);
    return (
        <div className={styles.formControl}>
            <label className={styles.formLabel}>
                {labelTitle}
            </label>
            {formInput}
            {errors[fieldName] && touched[fieldName]
                ? (<span className={styles.errorMessage}>{errors[fieldName]}</span>)
                : null}
        </div>
    );
};

export default MovieFormField;
