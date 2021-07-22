import React from 'react'

interface ListProps {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

export const List: React.FC<ListProps> = ({people}) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img src={person.img} alt={person.name} className='List-img' />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className='List-note'>{person.note}</p>
        </li>
      )
    })
  }

  return <ul>{renderList()}</ul>
}
