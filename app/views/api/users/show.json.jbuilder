json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :area_code, :account_type
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

json.reviews do
    @user.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :rating, :details, :artist_id, :task_id, :created_at
            json.reviewerId review.user.id
            json.created_at "#{review.created_at.month}/#{review.created_at.day}/#{review.created_at.year}"
        end
    end
end