

import { Description } from '@/components/Description'
import { Heading } from '@/components/Heading'
import { Listbullet } from '@/components/Listbullet/Listbullet'
import { overviewData } from '@/data/overviewData'
import { summaryList } from '@/data/summaryList'
import React from 'react'

const Summary = () => {
  return (
    <div >
      {/* overview data comming from overviewdata form data folder  */}
      {
        overviewData.map((data,index)=>(
          <div className="" key={index}>
            <Heading heading={"h2"}>{data.title}</Heading>
            <Description  className={'py-3'}>{data.brief}</Description>
            <Description className={'pt-3'}>{data.brief2}</Description>
          </div>
        ))
      }
      {/* summary list data comming from summaryList form data folder  */}
     
        {
          summaryList.map((item,index)=>(
            <div key={index} className='text-lg font-semibold py-2'>
              <Listbullet>{item.list}</Listbullet>
              {/* <li className='text-lg font-semibold py-2'>{item.list}</li> */}
            </div>
          ))
        }
    </div>
  )
}

export default Summary
