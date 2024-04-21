'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import Underline from '@tiptap/extension-underline'

const Tiptap = ({ onChange, content }) => {

    const handleChange = (newContent) => {
        onChange(newContent)
    }

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline
        ],
        editorProps: {
            attributes: {
                class:
                    "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-slate-500 bg-white text-slate-900 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-lg rounded-br-lg outline-none",
                // name: "description",
            },
        },

        onUpdate: ({ editor }) => {
            handleChange(editor.getHTML());
        },
    })

    return (
        <div className='w-full px-4'>
            <Toolbar editor={editor} content={content} />
            <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
        </div>
    )
}

export default Tiptap