import React from 'react'
import PropTypes from 'prop-types'

/*
const Hero = ({ heroName }) => {
    let design = null;
    try {
        if (heroName === 'Joker') {
            throw new Error('Not a hero')
        }
        design = (
            <span>
                Hero:&nbsp;{heroName}
            </span>
        );
    } catch (e) {
        console.log(e)
        design = <span>Error: {heroName} is not a hero</span>
    }
    return design;
}
*/
const Hero = ({ heroName }) => {
    console.log('[Hero] rendered')
    if (heroName === 'Joker') {
        throw new Error('Not a hero')
    }
    return (
        <span>
            Hero:&nbsp;{heroName}
        </span>
    );
}
Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero




