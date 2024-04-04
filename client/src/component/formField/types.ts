import { UseFormRegister, FieldError } from 'react-hook-form';

export declare type ValidFieldNames = string; // Example type definition, replace with your actual definition

export declare type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<any>; // Adjust 'any' based on your form data type
    error?: FieldError | undefined; // Make error property optional
    valueAsNumber?: boolean;
};
