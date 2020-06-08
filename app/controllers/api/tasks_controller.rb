class Api::TasksController < ApplicationController
  def show
    @task = Task.find(params[:id])
  end

  def index
    @tasks = Task.where(user_id: params[:user_id])
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 401
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task && @task.update(task_params)
      render :show
    elsif @task
      render json: @task.errors.full_messages, status: 401
    else
      render json: ["no such task"], status: 401
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task
      @task.destroy
      render json: ["destruction completed"]
    end
  end

  def task_params
    params.require(:task).permit(:title, :details, :completed, :artist_id, :user_id, :start_date, :end_date, :task_type_id)
  end
end
