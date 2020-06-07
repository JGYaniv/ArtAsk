class AddUserIdColToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :artist_id, :integer, null: false
  end
end
