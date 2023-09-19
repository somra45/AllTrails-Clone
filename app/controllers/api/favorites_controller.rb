class Api::FavoritesController < ApplicationController
    def index
        render :index
    end

    def create
        @favorite = Favorite.new(favorite_params)
        
        if @favorite.save 
            
    end

    def destroy
        
    end

    def favorite_params
        params.require(:favorite).permit(:member_id, :trail_id, :favorites)
    end
end