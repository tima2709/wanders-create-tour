import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quillStyle.css'
import {Controller} from "react-hook-form";

const DescReactQuill = ({ name, control}) => {

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
        ]
    }

    const formats = ['bold', 'italic', 'underline', 'list', 'bullet', 'indent',]


    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                    />
                )} />
        </div>
    );
};

export default DescReactQuill;