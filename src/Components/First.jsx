import './first.css';
import React, { useState, useEffect, useRef } from 'react';
import SecPage from './SecPage';
import { Link } from 'react-router-dom';

function First() {
    const [quotes, setQuotes] = useState('');
    const textref = useRef();
    let color = ['#ffff00', '#90ee90', '#ffa500', '#ff68ff', '#a9a9e7']


    const getQuotes = () => {
        fetch('https://type.fit/api/quotes')
            .then(res => res.json())
            .then((data) => {
                let randomNum = Math.floor(Math.random() * data.length);
                setQuotes(data[randomNum]);
            });
    }


    useEffect(() => {
        getQuotes();
    }, [])

    useEffect(() => {
        textref.current.style.color = color[Math.floor(Math.random() * color.length)]
    }, [quotes]);

    return (
        <div className="App">
            <div className='quote'>
            <h1 className='heading'>Unfold Quotes</h1>
                <div className='content'>
                    <p ref={textref}>{quotes.text}</p>
                    <p>Author: <em className='author-name'>{quotes.author}</em></p>
                </div>
                <div className='btnContainer'>
                    <button onClick={getQuotes} className='btn'>Get Quote</button>
                    <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target='_blank' rel="noreferrer" className='btn'>
                        Tweet
                    </a>
                    <br />
                    <div className='btn-div'>
                        <button className='send-btn'><Link to="send">Send Your Quote</Link></button>
                    </div>

                </div>



            </div>



        </div>
    );
}

export default First;
