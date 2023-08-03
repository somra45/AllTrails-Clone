json.review do
    json.set! @review.id do
        json.extract! @review, :id, :body, :author_id, :trail_id, :rating, :created_at, :updated_at
        json.author @review.author
        json.photoUrl @review.author.photo.attached? ? @review.author.photo.url : nil
    end
end