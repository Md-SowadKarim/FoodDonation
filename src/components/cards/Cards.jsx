import React from 'react'
import Card from '../card/Card'

const Cards = ({datas}) => {
  //console.log(datas)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4'>
      {
        datas.map(data=><Card key={data.id} categoryColor={data.Category_bg} textColor={data.Text_bg} cardColor={data.Card_bg} buttonColor={data.Button_bg} data={data} ></Card>)
      }
    </div>
  )
}

export default Cards
