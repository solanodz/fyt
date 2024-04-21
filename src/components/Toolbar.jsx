import React from 'react'
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Heading3,
    Heading4,
    Underline,
    Quote,
    Undo,
    Redo,
} from "lucide-react"
import { Button } from './ui/button';

const Toolbar = ({ editor, content }) => {

    if (!editor) return null;

    return (
        <div className='p-2 rounded-tl-lg rounded-tr-lg flex justify-between items-start gap-5 w-full flex-wrap border border-slate-500 bg-white'>
            <div className='flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap'>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={
                        editor.isActive("bold") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Bold className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={
                        editor.isActive("italic") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Italic className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleUnderline().run();
                    }}
                    className={
                        editor.isActive("underline") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Underline className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className={
                        editor.isActive("strike") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Strikethrough className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 2 }).run();
                    }}
                    className={
                        editor.isActive("heading", { level: 2 }) ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Heading2 className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 3 }).run();
                    }}
                    className={
                        editor.isActive("heading", { level: 3 }) ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Heading3 className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 4 }).run();
                    }}
                    className={
                        editor.isActive("heading", { level: 4 }) ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Heading4 className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={
                        editor.isActive("bulletList") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <List className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={
                        editor.isActive("orderedList") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <ListOrdered className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBlockquote().run();
                    }}
                    className={
                        editor.isActive("blockquote") ? "bg-sky-200 text-blue-700 rounded-md" : "text-blue-700  rounded-md"
                    }
                >
                    <Quote className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().undo().run();
                    }}
                    className="text-blue-700  rounded-md"
                >
                    <Undo className='h-5 w-5 m-1' />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().redo().run();
                    }}
                    className="text-blue-700  rounded-md"
                >
                    <Redo className='h-5 w-5 m-1' />
                </button>

                {content ? <Button onClick={() => console.log(content)} variant='primary'>Guardar</Button> : <Button onClick={() => console.log('No hay contenido')} variant='disabled'>Guardar</Button>}

            </div>
        </div>
    )
}

export default Toolbar
