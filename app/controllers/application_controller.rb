class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
    helper_method :logged_in?, :current_member
    before_action :snake_case_params
    before_action :attach_authenticity_token

    protect_from_forgery with: :exception
    rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_authenticity_token

    def logged_in?
        !!current_member
    end

    def login!(member)
        member.reset_session_token!
        session[:session_token] = member.session_token
    end

    def require_logged_in
        unless logged_in?
            render json: { errors: ['Must be logged in']}, status: :unauthorized
        end
    end

    def require_logged_out
        unless !logged_in?
            redirect_to api_member_url(current_member)
            # render json: { errors: ['Must be logged out']}, status: :403
        end
    end

    def current_member
        @current_member = Member.find_by(session_token: session[:session_token])
        @current_member
    end

    def logout!
        current_member.reset_session_token!
        session[:session_token] = nil
    end

    private
    
    def attach_authenticity_token
        # debugger
        headers["X-CSRF-Token"] = masked_authenticity_token(session)
    end

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
    
    def invalid_authenticity_token
        render json: { message: 'Invalid authenticity token' },
          status: :unprocessable_entity
    end
end
