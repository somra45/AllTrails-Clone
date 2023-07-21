json.member do
    json.extract! member, :id, :username, :email, :password, :created_at, :updated_at
end