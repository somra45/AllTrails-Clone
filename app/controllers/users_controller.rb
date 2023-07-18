class Api::UsersController < ApplicationController
    wrap_parameter include: User.attribute_names + ["password"]
    before_action :require_logged_out, only: [:create]
    def show
        @user = User.find(params[:id])
        
        if @user
            render :show
        else
            render json: { errors: ['User not found'], status: 422 }
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @user = User.find(params[:id])

        if @user.delete
            render 'api/session'
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
