class Api::TasksController < ApplicationController
  def show
    @task = Task.find(params[:id])
  end

  def index
    @tasks = Task.where(user_id: params[:user_id])
  end
end
