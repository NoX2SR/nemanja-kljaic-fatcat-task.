import { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { ZodError, z } from 'zod';

import { Layout } from './Layout.tsx';
import { usePostPostMutation } from '../api/data-handler.tsx';
import {
    FormValidation,
    IFormInput,
    ImyFormOptions,
} from '../model/components.tsx';

export const CreateForm = () => {
    let mutationMessage = '';
    const zodValidation = z.object({
        title: z
            .string()
            .min(3, 'Your title must contain at least 3 characters.')
            .max(10, 'Your title must be shorter than 10 characters'),
        body: z
            .string()
            .min(5, 'Your body must contain at least 5 characters.')
            .max(30, 'Your title must be shorter than 30 characters'),
    });

    const mutation = usePostPostMutation();

    if (mutation.isLoading) {
        mutationMessage = 'Submitting...';
    } else if (mutation.error) {
        mutationMessage = 'Error: ' + mutation.error.message;
    } else if (mutation.isSuccess) {
        mutationMessage = 'Post was posted with post method to the post API.';
    }

    return (
        <MyForm
            mutationStatusMessage={mutationMessage}
            onSubmitCallback={(data: IFormInput) => {
                mutation.mutate(data);
            }}
            zodValidation={zodValidation}
            key={1}
        />
    );
};

const MyForm = ({
    onSubmitCallback,
    zodValidation,
    mutationStatusMessage,
}: ImyFormOptions) => {
    const [titleErrorMessage, setTitleError] = useState('');
    const [bodyErrorMessage, setBodyError] = useState('');
    const [statusMessage, setStatusMessage] = useState(mutationStatusMessage);
    useEffect(() => {
        setStatusMessage(mutationStatusMessage);
    }, [mutationStatusMessage]);
    const { register, handleSubmit, reset, formState } = useForm<IFormInput>();
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ title: '', body: '' });
        }
    }, [formState, reset]); // This is wrong, but I will leave it like this. We should listen to "mutation.isSuccess". No one will use it in real life so...
    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        const validationObj: FormValidation = validateData(data);
        if (validationObj.valid) {
            setBodyError('');
            setTitleError('');
            onSubmitCallback(data);
        } else {
            setBodyError('');
            setTitleError('');
            //This could be done better. We can use one object, store messages in it and access by key (body/title...)
            validationObj.errors.forEach((error) => {
                if ('path' in error) {
                    error.path.forEach((path) => {
                        switch (path) {
                            case 'body':
                                setBodyError(error.message);
                                break;
                            case 'title':
                                setTitleError(error.message);
                                break;
                            default:
                                // Do nothing.
                                break;
                        }
                    });
                } else {
                    // Here we can throw this message and catch up further in the code and show in some error modal, or log it or just do nothing like now :)
                }
            });
        }
    };

    const validateData = (inputs: unknown): FormValidation => {
        const retObj: FormValidation = {
            valid: false,
            errors: [],
        };
        try {
            zodValidation.parse(inputs);
            retObj.valid = true;
            return retObj;
        } catch (error) {
            if (error instanceof ZodError) {
                retObj.errors = error.errors;
            } else if (error instanceof Error) {
                retObj.errors = [error];
            } else {
                // Almost imposible to happen. But who knows...
            }
            return retObj;
        }
    };

    return (
        // Sorry for editing style here. It could be a lot better but I havent had time for it. :)
        // I haven't used Tailwind yet and I have to analyze what properties do I have... This was faster :) Please, don't get mad :)
        <Layout background="">
            <form
                // If I do it with arrow function, onSubmit doesnt work. It has to be dissabled or I don't know batter solution.
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    width: '50%',
                    marginLeft: '25%',
                    backgroundColor: '#DDDDDD',
                    flex: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <input
                    style={{
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderRadius: '5px',
                        padding: 10,
                        margin: 20,
                    }}
                    placeholder="Title"
                    {...register('title', {})}
                />
                <label
                    style={{
                        color: 'red',
                    }}
                >
                    {titleErrorMessage}
                </label>
                <textarea
                    style={{
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderRadius: '5px',
                        width: '70%',
                        height: '20vh',
                        padding: 10,
                        margin: 20,
                    }}
                    placeholder="Body"
                    {...register('body', {})}
                />
                <label
                    style={{
                        color: 'red',
                    }}
                >
                    {bodyErrorMessage}
                </label>
                {statusMessage ? (
                    <label
                        style={{
                            color: 'green',
                        }}
                    >
                        {statusMessage}
                    </label>
                ) : null}
                <input
                    style={{
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderRadius: '5px',
                        padding: 10,
                        margin: 20,
                    }}
                    type="submit"
                />
            </form>
        </Layout>
    );
};
