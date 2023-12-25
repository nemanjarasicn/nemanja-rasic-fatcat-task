import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';
import { Button } from '@homework-task/components/ui/Button';
import { RingLoader } from 'react-spinners';

// style
import './styles.css';

interface CreateFormProps {
    useMutation: typeof useMutation;
    renderForm: (props: { register: any; formState: any }) => React.ReactNode;
    validationSchema: typeof validationSchema;
    successMessage: string;
}

interface FormDataValues {
    title: string;
    body: string;
}

// Validation schema using Zod
const validationSchema = object({
    title: string()
        .min(1, 'Title is required')
        .max(50, 'Title must be at most 50 characters'),
    body: string()
        .min(1, 'Body is required')
        .max(200, 'Body must be at most 200 characters'),
});

// API hook call using React Query
const createPost = async (data: FormDataValues) => {
    try {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Failed to create post', error);
        throw new Error('Failed to create post');
    }
};

const CreateForm = ({ renderForm, validationSchema }: CreateFormProps) => {
    const queryClient = useQueryClient();
    const { register, handleSubmit, formState, reset } =
        useForm<FormDataValues>({
            resolver: zodResolver(validationSchema),
        });

    const mutation = useMutation(createPost, {
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
            reset();
        },
        onError: (error) => {
            console.warn('error', error);
        },
    });

    const onSubmit: SubmitHandler<FormDataValues> = (data) => {
        mutation.mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
            {renderForm({ register, formState })}
            {mutation.isError && <p>Error:</p>}
            {mutation.isLoading && (
                <div className="flex justify-center items-center">
                    <RingLoader
                        color="#36D7B7"
                        loading={mutation.isLoading}
                        size={150}
                    />
                </div>
            )}
            <Button children={'Submit'} />
        </form>
    );
};

const FormGenerator = () => {
    return (
        <CreateForm
            useMutation={useMutation}
            validationSchema={validationSchema}
            successMessage="Successfully created"
            renderForm={({ register, formState }) => (
                <>
                    <label>Title</label>
                    <input {...register('title')} className="titleField" />
                    {formState.errors.title && (
                        <p className="errorText">
                            {formState.errors.title.message}
                        </p>
                    )}

                    <label>Body</label>
                    <textarea {...register('body')} className="bodyField" />
                    {formState.errors.body && (
                        <p className="errorText">
                            {formState.errors.body.message}
                        </p>
                    )}
                </>
            )}
        />
    );
};

export default FormGenerator;
