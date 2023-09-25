json.member do 
    json.extract! @member, :id, :firstname, :lastname, :email, :created_at
    json.photoUrl @member.photo.attached? ? @member.photo.url : nil
    json.extract! @member.favorited_trails
    json.reviews do 
        @member.reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :body, :author_id, :trail_id, :rating, :created_at, :updated_at
                json.trail review.trail
                json.imageUrls review.trail.images.map { |file| file.url }
            end
        end
    end
end