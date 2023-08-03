json.member do 
    json.extract! @member, :id, :firstname, :lastname, :email, :created_at
    json.photoUrl @member.photo.attached? ? @member.photo.url : nil
end