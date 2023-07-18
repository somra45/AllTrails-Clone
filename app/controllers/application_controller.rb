class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
    helper_method :logged_in?, :current_user
    before_action :snake_case_params, :attach_authenticity_token

    protect_from_forgery with: :exception

    def attach_authenticity_token
        headers["X-CSRF_Token"] = masked_authenticity_token(session)
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        redirect_to user_url(user)
    end

    def require_logged_in
        unless logged_in?
            redirect_to user_url(current_user)
            render json: { errors: ['Must be logged in']}, status: :unauthorized
        end
    end

    def require_logged_out
        unless !logged_in?
            redirect_to new_session_url
            render json: { errors: ['Must be logged out']}, status: :403
        end
    end

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
        @current_user
    end

    def logout!
        session[:session_token] = nil
        current_user.reset_session_token!
        redirect_to new_session_url
    end

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
    
end
