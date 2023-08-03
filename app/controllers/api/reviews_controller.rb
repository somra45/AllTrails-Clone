class Api::ReviewsController < ApplicationController
    def create
        @review = Review.create(review_params)

        if @review.save 
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    def review_params
        params.require(:review).permit(:id, :body, :author_id, :trail_id, :rating)
    end
end
