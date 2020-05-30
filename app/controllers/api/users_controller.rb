class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            redirect_to api_user_url(@user)
        else
            render json: @user.errors.full_messages
        end
    end

    def index
        @users = User.all
    end
    
    def show
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to api_user_url
        else
            render json: @user.errors.full_messages
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.id == current_user.id
            @user.destroy
            redirect_to root_url
        end
    end

end