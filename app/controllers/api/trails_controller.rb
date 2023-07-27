class Api::TrailsController < ApplicationController
    def index
        @trails = Trail.all.includes(:tags)

        render :index
    end

    def show
        @trail = Trail.find_by(id: params[:id])

        if @trail
            render :show
        else
            render json: { errors: ['Could not find trail']}, status: 422
        end
    end
end