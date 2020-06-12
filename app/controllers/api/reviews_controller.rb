class Api::ReviewsController < ApplicationController
  def index
    @reviews = User.find(params[:user_id]).reviews
  end

  def show
    @review = Review.find(params[:id])
  end
  
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: ["Invalid review"], status: 401
    end
  end

  def review_params
    params.require(:review).permit(:rating, :details, :task_id, :artist_id)
  end
end
