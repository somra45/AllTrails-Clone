@trails.each do |trail|
    json.set! trail.id do
        json.extract! trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain
        json.tags trail.tags.to_a.map { |tag| tag.trail_tag } 
        # json.photoUrl trail.photo.attached? ? trail.photo.url : nil
        json.imageUrls trail.images.map { |file| file.url }

    end
end
