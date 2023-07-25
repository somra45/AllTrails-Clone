json.set! @trail.id do 
    json.extract! @trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain
end