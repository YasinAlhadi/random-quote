import { useState } from 'react'
import axios from 'axios'
import './App.scss'

const baseURL = 'https://api.quotable.io/random'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  /* const [color, setColor] = SetState('#000000') */

  const getQuote = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setQuote(res.data.content)
        setAuthor(res.data.author)
      })
      .catch((err) => console.log(err))
  }

  if (!quote) {
    getQuote()
  }
  return (
    <>
    <div className='random-quote'>
      <div className="heading"> Random Quote Generator</div>
      <div className="decription">
        <p>Click on New Quote button to generate random quote</p>
      </div>
    </div>
      <div id='quote-box'>
        <div id='text'>{quote}</div>
        <div id='author'>Author: {author}</div>
        <div id='buttons'>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target='_too'>Tweet Quote</a>
          <button id='new-quote' onClick={getQuote}>New Quote</button>
        </div>
      </div>
      <div className="links">
        Created by: <a href="https://twitter.com/yasin_elhadi"> <img src="./square-x-twitter.svg" alt="square-x-twitter" /> Yasin Alhadi</a> | Source Code: <a href="https://github.com/YasinAlhadi/random-quote"> <img src="./github.svg" alt="github" /> Github</a>
      </div>
    </>
  )
}

export default App
