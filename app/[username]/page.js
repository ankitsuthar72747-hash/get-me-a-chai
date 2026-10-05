import React from 'react'
import PayementsPage from '@/components/PaymentsPage'
const Username = async ({params}) => {
  const { username } = await params

  return (
  <>
  <PayementsPage username={username}/>
  </>
  )
}

export default Username

export const metadata = {
  title: 'Your Page - Get Me A Chai',
}