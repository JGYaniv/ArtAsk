class Api::SessionsController < ApplicationController
    def create
        user = User.find_by(email: user_params[:email])
        if user && user.is_password?(user_params[:password])
            login(user)
            redirect_to api_user_url(user)
        else
            render json: ["invalid username or password"], status: 401
        end
    end

    def destroy
        logout
    end
end