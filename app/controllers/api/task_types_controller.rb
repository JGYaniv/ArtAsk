class Api::TaskTypesController < ApplicationController
  def index
    @task_types = TaskType.all
  end

  def show
    @task_type = TaskType.find(params[:id])
  end
end
