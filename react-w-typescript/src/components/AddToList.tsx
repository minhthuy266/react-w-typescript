import React, {useState} from 'react'
import {IState as Props} from '../App'

interface AddToListProps {
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
  people: Props['people']
}

export const AddToList: React.FC<AddToListProps> = ({setPeople, people}) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = () => {
    if (!input.name || !input.age || !input.img) return

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ])

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    })
  }

  return (
    <div className='AddToList'>
      <input
        type='text'
        name='name'
        className='AddToList-input'
        placeholder='Name'
        value={input.name}
        onChange={handleChange}
      />

      <input
        type='text'
        name='age'
        className='AddToList-input'
        placeholder='Age'
        value={input.age}
        onChange={handleChange}
      />

      <input
        type='text'
        name='img'
        className='AddToList-input'
        placeholder='Image URL'
        value={input.img}
        onChange={handleChange}
      />

      <textarea
        className='AddToList-input'
        name='note'
        placeholder='Note'
        value={input.note}
        onChange={handleChange}
      />

      <button onClick={handleClick} className='AddToList-btn'>
        Add to List
      </button>
    </div>
  )
}
