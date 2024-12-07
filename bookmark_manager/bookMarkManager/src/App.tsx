import React, { useState } from 'react'
import './App.css'

interface bookMarkType {
  id: number, 
  title: string,
  url: string
}

function App() {
  const [bookmarkList, setbookmarkList] = useState<bookMarkType[]>([{
    id: 0,
    title: '',
    url: ''
  }])

  const [url,setUrl] = useState('');
  const [title,setTitle] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => 
  {
    const {name, value} = e.target;

    if(name == "url") 
    {
      setUrl(value);
    }
    else if(name == 'title')
    {
      setTitle(value);
    }
  }

  const handleClick = () => 
  {
    const newBookmark = {
      id: bookmarkList.length + 1,
      title: title,
      url: url
    }
    
    setbookmarkList((prev) => [...prev,newBookmark]);
  }

  return (
    <>
      <div>
      <input type="text" name='url' value={url} onChange={
          handleChange
          } placeholder='Enter url' />
          <input type="text" name='title' onChange={
          handleChange
        } value={title} placeholder='Enter title' />
        <button onClick={handleClick}> Add bookmark </button>
        {bookmarkList.map((bookmark) => 
        <div>
          <div>
            {bookmark.title} - {bookmark.url}
          </div>
        </div>)}      
      </div>
    </>
  )
}

export default App;
