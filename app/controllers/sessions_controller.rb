class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]
    def create
        @user = User.find_by_credentials(params[:username], params[:password])

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: { errors: ['Invalid credentials'], status: 422}
        end
    end

    def destroy
        logout!
        head :no_content
    end

    def show
        @user = current_user

        if @user 
            render 'api/users/show'
        else
            render json: { user: nil }
        end
    end

end
