json.trail do
    json.set! @trail.id do 
        json.extract! @trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain, :lat, :lng
        json.tags @trail.tags.pluck(:trail_tag) 
        json.review_ids @trail.reviews.pluck(:id)
        json.imageUrls @trail.images.map { |file| file.url }
    end
end

json.reviews do
    @trail.reviews.includes(:author).each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :author_id, :trail_id, :rating, :created_at, :updated_at
            json.author review.author 
        end
    end
end

# json.photoUrl @trail.photo.attached? ? @trail.photo.url : nil

