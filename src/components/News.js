import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../store/actions';
import Spinner from './Spinner';
import './News.css';

const News = ({ newsData, isFetching, getNews }) => {

useEffect(() => getNews(), [getNews]);

const news = newsData.map( item => (
    <article key={item.id} id={item.id}>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
    </article>
));
if (isFetching) return <Spinner></Spinner>;
return (
    <div className="content">
        <h1 className="content__header">Новости</h1>
        <div className="content__main news">
            { news }
            <div className="newsAmount">Всего новостей: { news.length }</div>
        </div>
    </div>
);
};

const mapStateToProps = ({ newsReducer }) => newsReducer;
const mapDispatchToProps = { getNews };
export default connect(mapStateToProps, mapDispatchToProps)(News);