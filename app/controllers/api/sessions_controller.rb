class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]
    before_action :require_logged_in, only: [:destroy]

    def create
        @member = Member.find_by_credentials(params[:member][:credential], params[:member][:password])
        if @member
            login!(@member)
            render 'api/members/show'
        else
            render json: { errors: ['Invalid credentials'], status: 422}
        end
    end

    def destroy
        logout!
        head :no_content
    end

    def show
        @member = current_member
        if @member 
            render 'api/members/show'
        else
            render json: { member: nil }
        end
    end

end
