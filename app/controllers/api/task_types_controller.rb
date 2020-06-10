class Api::TaskTypesController < ApplicationController
  def index
    @task_types = TaskType.all
  end

  def show
    @task_type = TaskType.find(params[:id])
    @artists = @task_type.artists.with_attached_photo.includes(reviews: [:user])
  end

  def artists
    @artists = TaskType.find(params[:id]).artists.with_attached_photo.includes(reviews: [:user])
  end

  def reviews
    @reviews = TaskType.find(params[:id]).reviews.includes(:user)
  end
end
