class ApplicationController < ActionController::Base
    # protect_from_forgery unless: -> { request.format.json? }
    
    helper_method :current_user, :logged_in?

    def current_user
        User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        user.save
    end
    
    def logout
        current_user.reset_session_token! if current_user
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def ensure_logged_in
        redirect_to root_url unless logged_in?
    end

    def user_params
        params.require(:user).permit(
            :email, 
            :password, 
            :first_name, 
            :last_name, 
            :about,
            :portfolio_url,
            :account_type,
            :phone_number,
            :area_code
        )
    end
end
