class Api::TaskTypesController < ApplicationController
  def index
    @task_types = TaskType.all
  end

  def show
    @task_type = TaskType.find(params[:id])
    @artists = @task_type.artists.with_attached_photo.includes(reviews: [:user]).with_attached_photo
    #how do i do this above activeRecord query while avoiding n+1 for active storage???
  end

  # def artists
  #   @artists = TaskType.find(params[:id]).artists.with_attached_photo.includes(reviews: [:user])
  # end

  def reviews
    @reviews = TaskType.find(params[:id]).reviews.includes(:user)
  end
end
