import { ZodIssue } from 'zod';

export interface ISimpleModal {
    content: string;
}

export interface IbuttonOptions {
    children?: string;
    props?: Array<string>;
    onClick(event: React.MouseEvent<HTMLElement>): null;
}

export interface Icard {
    title: string;
    image: string;
    description: string;
    background: string;
    buttonText: string;
    onClick(event: React.MouseEvent<HTMLElement>): null;
}

export interface IlayoutOptions {
    children: React.ReactNode;
    background: string;
    props?: Array<string>;
}

export interface ImyFormOptions {
    onSubmitCallback: (data: IFormInput) => void;
    zodValidation: Zod.AnyZodObject;
    mutationStatusMessage: string;
}

export interface IFormInput {
    title: string;
    body: string;
}

export type FormValidation = {
    valid: boolean;
    errors: Array<ZodIssue> | Array<Error>;
};
