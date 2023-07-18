class UsersController < ApplicationController
    def index
        @users = User.all 

        render :index
    end

    def show
        @user = User.find(params[:id])

    end

    def update
        @user = User.find(params[:id])

        
    end

    def destroy
        @user = User.find(params[:id])

        @user.delete
    end

    def create
        @user = User.new(user_params)

        if @user.save
            redirect_to user_url(@user)
        else
            render :create
        end
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
