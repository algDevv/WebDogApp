import React from 'react'
import data from '../utils/data'
import CardUser from './CardUser'


const Cards = () => {
  return (
    <section className='mt-20 bg-white w-full rounded-tl-3xl rounded-tr-3xl'>
      <div className='max_padd_container'>
        <div className='w-full flex pt-24'>
          <h3 className='h3 capitalize mx-auto text-secondary'>Ils ont testé, ils en parlent</h3>
        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-20 pb-32'>
          {
            data.map((user) => {
              return <CardUser key={user.id} profil={user.profileImage} name={user.name} nameDog={user.dogName} review={user.review} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Cards
