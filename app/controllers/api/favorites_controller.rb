class Api::FavoritesController < ApplicationController
    def index
        @current_member = Member.find_by(id: params[:member_id])
        @favorited_trails = @current_member.favorited_trails

        render :index
    end

    def create
        @favorite = Favorite.new(favorite_params)
        
        if @favorite.save 

        end
            
    end

    def destroy
        @favorite = Favortite.find_by(id: params[:favorite_id])

        if @favorite.destroy
            
        end
    end

    def favorite_params
        params.require(:favorite).permit(:member_id, :trail_id, :favorites)
    end
end