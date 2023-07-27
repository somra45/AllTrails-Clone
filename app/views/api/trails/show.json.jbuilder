json.set! @trail.id do 
    json.extract! @trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain
    json.tags @trail.tags.to_a.map { |tag| tag.trail_tag }
    json.reviews @trail.reviews.to_a
end