json.review do
    json.set! @review.id do
        json.extract! @review, :body, :author_id, :trail_id, :rating, :created_at, :updated_at
    end
end