json.trails({})

json.trails do
    @trails.each do |trail|
        json.set! trail.id do 
            json.extract! trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain, :lat, :lng
            json.tags trail.tags.pluck(:trail_tag) 
            json.review_ids trail.reviews.pluck(:id)
            # json.imageUrls trail.images.map { |file| file.url }
        end
    end
end