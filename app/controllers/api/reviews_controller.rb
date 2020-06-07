class Api::ReviewsController < ApplicationController
  def index
    @reviews = User.find(params[:user_id]).reviews
  end

  def show
    @review = Review.find(params[:id])
  end
end
