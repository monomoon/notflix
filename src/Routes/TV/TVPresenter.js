import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section'
import Loader from '../../Components/Loader';
import Poster from 'Components/Poster';
import Message from 'Components/Message';

const Container = styled.div``;

const TVPresenter = ( {topRated, popular, airingToday, loading, error}) => 
loading ? <Loader/> : (
    <Container>
        {topRated && topRated.length > 0 && (
        <Section title="Top Rated show">
            {topRated.map(show => 
                <Poster 
                key={show.id}
                id={show.id}
                title={show.original_name} 
                imageUrl={show.poster_path} 
                rating={show.vote_average} 
                year={show.first_air_date && show.first_air_date.substring(0,4)} />)}
        </Section>
        )}
        {popular && popular.length > 0 && (
        <Section title="popular show">
            {popular.map(show => 
                <Poster 
                key={show.id}
                id={show.id}
                title={show.original_name} 
                imageUrl={show.poster_path} 
                rating={show.vote_average} 
                year={show.first_air_date && show.first_air_date.substring(0,4)} />)}
        </Section>
        )}
        {airingToday && airingToday.length > 0 && (
        <Section title="airingToday">
            {airingToday.map(show => (
                <Poster 
                key={show.id}
                id={show.id}
                title={show.original_name} 
                imageUrl={show.poster_path} 
                rating={show.vote_average} 
                year={show.first_air_date && show.first_air_date.substring(0,4)} />
            ))}
        </Section>
        )}
        {error && <Message color="e74c3c" text="{error}"/>}
    </Container>)

TVPresenter.propTypes ={
    topRating:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
};

export default TVPresenter;

