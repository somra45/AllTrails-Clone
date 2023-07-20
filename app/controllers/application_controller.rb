class ApplicationController < ActionController::API
    include ActionController::RequestForgeryProtection
    helper_method :logged_in?, :current_member
    before_action :snake_case_params, :attach_authenticity_token

    protect_from_forgery with: :exception

    def attach_authenticity_token
        headers["X-CSRF_Token"] = masked_authenticity_token(session)
    end

    def logged_in?
        !!current_member
    end

    def login!(member)
        member.reset_session_token!
        session[:session_token] = member.session_token
        redirect_to member_url(member)
    end

    def require_logged_in
        unless logged_in?
            redirect_to user_url(current_member)
            render json: { errors: ['Must be logged in']}, status: :unauthorized
        end
    end

    def require_logged_out
        unless !logged_in?
            redirect_to new_session_url
            render json: { errors: ['Must be logged out']}, status: :403
        end
    end

    def current_member
        @current_member = Member.find_by(session_token: session[:session_token])
        @current_member
    end

    def logout!
        session[:session_token] = nil
        current_member.reset_session_token!
        redirect_to new_session_url
    end

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
    
end
