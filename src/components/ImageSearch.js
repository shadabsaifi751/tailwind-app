import React,{useState} from 'react'

const ImageSearch = ({ searchtext }) => {
    const [text,setText] = useState('');

    // const onSubmit= (e) => {
    //     e.preventDefault();

    //     searchtext(text)
    // }
    const onChange= (e) => {
        e.preventDefault();

        searchtext(text)
    }
  return (
    <div className='max-w-sm rounded overflow-hidden my-20 mx-auto'>
        <form className='w-full max-w-sm' onChange={onChange}>
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                <input type="text" onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py- px-2 leading-tight focus:outline-none' placeholder='Search Images term...' />
                <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 tect-sm border-4 text-white py-1 px-2 rounded' type='submit'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch