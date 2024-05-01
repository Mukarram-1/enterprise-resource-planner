import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const RatingStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarIcon key={i} style={{ color: 'gold' }} />);
  }
  if (hasHalfStar) {
    stars.push(<StarOutlineIcon key="half"  style={{ color: 'gold' }}/>);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarOutlineIcon key={`empty-${i}`}  style={{ color: 'gold' }}/>);
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default RatingStars;