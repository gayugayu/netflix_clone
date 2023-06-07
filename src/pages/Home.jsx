import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID='1'
         title='Up Coming'
         fetchURL={requests.requestUpcoming}
        />
          <Row rowID='2'
         title='Popular'
         fetchURL={requests.requestPopular}
         />
         <Row rowID='3'
         title='Horror'
         fetchURL={requests.requestHorrorMovies}
         />
          <Row rowID='4'
         title='TopRated'
         fetchURL={requests.requestTopRated}
         />
        <Row rowID='5'
         title='SciFi'
         fetchURL={requests.requestSciFi}
         />
          <Row rowID='6'
         title='ActionMovies'
         fetchURL={requests.requestActionMovies}
         />
         <Row rowID='7'
         title='Animation'
         fetchURL={requests.requestAnimation}
         />
           <Row rowID='8'
         title='TV'
         fetchURL={requests.requestTV}
         />
           <Row rowID='9'
         title='Mystery'
         fetchURL={requests.requestMystery}
         />
              <Row rowID='10'
         title='Western'
         fetchURL={requests.requestWestern}
         />
         
         
         
    </div>
  )
}

export default Home