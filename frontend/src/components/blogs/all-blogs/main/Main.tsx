import React from 'react'
import List from '../../List'
import Pagination from '../../../ui/pagination/Pagination'

const Main = () => {
  return (
    <main className='flex flex-col gap-4'>
        <section className='flex flex-col gap-6 xs:gap-16'>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <div>
              <Pagination />
            </div>
        </section>
    </main>
  )
}

export default Main