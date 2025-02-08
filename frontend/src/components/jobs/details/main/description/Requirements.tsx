import React from 'react';
import List from './List';




const Requirements = () => {
  return (
    <>
    <h3 className="text-base sm:text-lg font-semibold text-black my-4">Requirements:</h3>
    <section className='my-4 space-y-4'>
        <List />
        <List />
        <List />
        <List />
        <List />
    </section>
    </>
  )
}

export default Requirements