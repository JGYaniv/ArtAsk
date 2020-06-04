json.id @user.id
json.first_name @user.first_name
json.last_name @user.last_name
json.email @user.email
json.area_code @user.area_code
json.phone_number @user.phone_number
json.photoUrl (@user.photo.attached? ? url_for(@user.photo) : nil)