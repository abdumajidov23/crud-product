import { request } from '@/api'
import Products from '@/components/Products'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const {data, error, loading} = useFetch("/product/get")
  return (
    <div>
      <p>Home</p>
      {
        loading && <p>Loading...</p>
      }
      <Products isAdmin={false} data={data}/>
    </div>
  )
}

export default Home