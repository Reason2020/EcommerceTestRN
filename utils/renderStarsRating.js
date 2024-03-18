import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../constants/colors'

const renderStarsRating = (rating) => {
    //calculating number of full, half and empty stars
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars
    const remaingStars = Math.floor(5 - rating)
    const stars = []

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesome name='star' color={colors.star} size={24} />)
    }

    if (halfStar > 0) {
        stars.push(<FontAwesome name='star-half-empty' color={colors.star} size={24} />)
    }

    if (remaingStars >= 1) {
        for (let i = 0; i < remaingStars; i++) {
            stars.push(<FontAwesome name='star-o' color={colors.star} size={24} />)
        }
    }

    return stars
}

export default renderStarsRating