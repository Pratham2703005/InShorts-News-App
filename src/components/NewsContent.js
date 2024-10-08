import { Container } from '@mui/material'
import './NewsContent.css'
import React from 'react'
import Newscard from '../Card/Newscard'

const NewsContent = ({newsArray, newsResult, loadmore,setLoadmore}) => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadMessage'>
            <span className='downloadText'>
            For the best experience use <strong>inshorts</strong> app on your smartphone
            </span>

            <img alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />

            <img alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
        </div>
         {
            newsArray
            .filter(newsItem => newsItem.title !== "[Removed]")
            .map((newsItem) => (
              <Newscard newsItem={newsItem} key={newsItem.title} />
            ))
         }
         
         {loadmore <= newsResult && (
          <>
          <hr/>
          <button className='loadmore' onClick={()=> setLoadmore(loadmore+20)}>Load More</button>
          </>
         ) 
         }
         
        

      </div>
    </Container>
  )
}

export default NewsContent
