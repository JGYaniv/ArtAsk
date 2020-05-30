class Api::SessionsController < ApplicationController
    def create
        user = User.find_by(email: user_params[:email])
        if user && user.is_password?(user_params[:password])
            login(user)
            redirect_to root_url
        else
            render json: ["invalid username or password"]
        end
    end

    def destroy
        logout
        redirect_to root_url
    end
end