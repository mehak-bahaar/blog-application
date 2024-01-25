import React from 'react'
import Featured from '../Components/Featured/Featured'
import CatagoryList from '../Components/CatagoryList/CatagoryList'
import CardList from '../Components/CardList/CardList'
import Menu from '../Components/Menu/Menu'

const Contact = () => {
  return (
    <div className={styles.container}>
       <Featured/>
       <CatagoryList/>
       <div className={styles.content}>
        <CardList/>
        <Menu/>
       </div>
    </div>
  )
}

export default Contact
