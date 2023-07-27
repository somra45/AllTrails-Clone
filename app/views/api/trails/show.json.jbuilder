json.trail do
    json.set! @trail.id do 
        json.extract! @trail, :trail_id, :name, :location, :description, :difficulty, :route_type, :length, :elevation_gain
        json.tags @trail.tags.pluck(:trail_tag) 
        json.review_ids @trail.reviews.pluck(:id)
    end
end

json.reviews do
    @trail.reviews.includes(:author).each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :author_id, :trail_id
            json.author review.author 
        end
    end
end
