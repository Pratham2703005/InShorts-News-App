import React from 'react'
import placeholderImg from '../assets/placeHolderImage.png'
import './Newscard.css'


const Newscard = ({ newsItem }) => {
    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;

    return (
        <div className='newscard'>
            <img className="newsImage" src={newsItem.urlToImage ? newsItem.urlToImage : placeholderImg} alt={newsItem.title}></img>
            <div className='newsText'>

                <span className='title'>
                    {newsItem.title}
                </span>
                <br />
                <span className='author'>
                    <a
                        href={newsItem.url} alt="..."
                        target='_blank'>
                        <b>Short</b>
                    </a>
                    <span className='muted'> by {newsItem.author ? newsItem.author : "unknown"} /
                        {
                            time ? ` ${hour - 12}:${date[4].substring(3, 5)} pm` : ` ${hour}:${date[4].substring(3, 5)} am`
                        } on {date[2]} {date[1]} {date[3]}, {date[0]}
                    </span>

                </span>
                <div className='lowerNewsText'>
                    <div className='description'>
                        {newsItem.description}
                    </div>
                    <span className='readmore'>
                        read more at <a
                            href={newsItem.url} alt="..."
                            target='_blank'>
                            <b>{newsItem.source.name}</b>
                        </a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Newscard
