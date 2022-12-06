import React from 'react'

 const Title = ({ title }) => {
  return (
    <div>
    <h1 className='title-text font-weight-bold'>
        {title}
    </h1>
    </div>
  )
}

export default Title;