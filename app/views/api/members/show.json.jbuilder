json.member do 
    json.extract! @member, :id, :firstname, :lastname, :email, :created_at
    json.photoUrl @member.photo.attached? ? @member.photo.url : nil
    json.extract! @member.favorited_trails
end