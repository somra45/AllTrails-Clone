@favorited_trails.each do |trail|
    json.set! trail.id do
        json.extract! trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain, :lat, :lng
        json.tags trail.tags.to_a.map { |tag| tag.trail_tag } 
        json.imageUrls trail.images.map { |file| file.url }
    end
end
