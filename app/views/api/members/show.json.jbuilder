json.member do 
    json.extract! @member, :id, :firstname, :lastname, :email, :created_at
    # json.photoUrl trail.photo.attached? ? trail.photo.url : nil
end