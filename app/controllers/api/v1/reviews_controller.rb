module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_airline, only: [:create]


      def create
        review = Review.new(review_params)
        review.airline = @airline
        if review.save
          render json: ReviewSerializer.new(review).serializable_hash.to_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      def destroy
        review = Review.find(params[:id])
        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private

      def set_airline
        @airline ||= Airline.find(params[:airline_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :airline_id, :score)
      end
    end
  end
end
