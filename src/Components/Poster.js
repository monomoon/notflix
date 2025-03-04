import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container =styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image:url(${prop => prop.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.2s linear;
`;

const Rating = styled.span`
    right:5px;
    bottom:5px;
    position: absolute;
    opacity:0;
`;

const ImageContainer =styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover{
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity:1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
    white-space:nowrap;
    overflow: hidden;
`;

const Year = styled.span`
    font-size:10px;
    color: rgba(255,255,255,0.5);
`;

const Poster =({id, imageUrl, title, rating, year, isMovie=false}) => 
<Link to={isMovie? `/movie/${id}` : `/show/${id}`}>
    <Container>
        <ImageContainer>
            <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
            : require("../asset/no-poster.png")}/>
            <Rating>
                <span role ="img" aria-label="rating">⭐</span>{" "}{rating}/10
            </Rating>
        </ImageContainer>
        <Title>
            {title.length > 18 ? `${title.substring(0,18)} ... `: title}
        </Title>
        <Year>{year}</Year>
    </Container>
</Link>


Poster.propTypes = {
    id:PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    year:PropTypes.string.isRequired,
    isMovie:PropTypes.bool
};

export default Poster