class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            redirect_to api_user_url(@user)
        else
            render json: @user.errors.full_messages, status: 401
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
           render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.id == current_user.id
            @user.destroy
            render json: ["all your base belongs to us"]
        end
    end

    def verification
        @user = User.find(params[:id])
        if @user && @user.is_password?(user_params[:password])
            render json: {bool: true}
        else
            render json: {bool: false}
        end
    end

end