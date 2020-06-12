json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :area_code
end

json.users do
    @user.clients.each do |client|
        json.set! client.id do
            json.partial! "api/users/user", user: client
        end
    end

    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end