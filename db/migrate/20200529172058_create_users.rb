class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :account_type, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.text :about
      t.string :portfolio_url
      t.string :phone_number, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
