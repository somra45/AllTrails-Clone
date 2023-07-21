json.member do 
    json.extract! @member, :id, :username, :email, :created_at
end