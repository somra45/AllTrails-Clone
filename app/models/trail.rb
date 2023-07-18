class Trail < ApplicationRecord
    validates :trail_id, :location, :length, :elevation_gain, :route_type,
        :description, :difficulty, presence: true
    
end
