class Api::MembersController < ApplicationController
    wrap_parameters include: Member.attribute_names + ["password"]
    before_action :require_logged_out, only: [:create]
    def show
        @member = Member.find(params[:id])
        
        if @member
            render :show
        else
            render json: { errors: ['Member not found']}, status: 422 
        end
    end

    def update
        @member = Member.find(params[:id])

        if @member.update(member_params)
            render :show
        else
            render json: { errors: @member.errors.full_messages }, status: 422
        end
        
    end

    def destroy
        @member = Member.find(params[:id])

        if @member && @member.delete
            render 'api/session'
        end
    end

    def create
        @member = Member.new(member_params)

        if @member.save
            login!(@member)
            render :show
        else
            render json: { errors: @member.errors.full_messages }, status: 422
        end
    end

    def member_params
        params.require(:member).permit(:firstname, :lastname, :email, :password)
    end
end
