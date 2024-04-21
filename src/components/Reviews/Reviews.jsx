import React from "react";
import {
  OrderFormBox,
  ReviewItem,
  ReviewsList,
  ReviewsWrapper,
} from "./Reviews.styled";
import RatingStars from "../RatingStars/RatingStars";
import OrderForm from "../OrderForm/OrderForm";

const Reviews = ({ reviews }) => {
  return (
    <ReviewsWrapper>
      <ReviewsList>
        {reviews.map((review, idx) => (
          <ReviewItem key={idx}>
            <div className="title-box">
              <div className="avatar">
                <h1>{review.reviewer_name.charAt(0)}</h1>
              </div>
              <div className="title">
                <h3>{review.reviewer_name}</h3>
                <RatingStars rating={review.reviewer_rating} />
              </div>
            </div>
            <p> {review.comment}</p>
          </ReviewItem>
        ))}
      </ReviewsList>

      <OrderFormBox>
        <OrderForm />
      </OrderFormBox>
    </ReviewsWrapper>
  );
};

export default Reviews;
