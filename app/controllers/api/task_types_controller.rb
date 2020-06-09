class Api::TaskTypesController < ApplicationController
  def index
    @task_types = TaskType.all
  end

  def show
    @task_type = TaskType.find(params[:id])
  end

  def artists
    @artists = TaskType.find(params[:id]).artists.with_attached_photo.includes(:reviews)
    # @artists = User.with_attached_photo.includes(:reviews).where("reviews.task_type_id = ?", params[:id])
  end

  def reviews
    @reviews = TaskType.find(params[:id]).reviews.includes(:user)
  end
end
