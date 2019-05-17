import React from 'react'

const HomePage = ({ data }) => {
  const { heading } = data

  return (
    <main>
      <header>
        <h1>{heading}</h1>
      </header>
    </main>
  )
}

export default HomePage
