# JUST KIDDING! We're gonna make the reviews table.

class RemoveVariousCols < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :task_id, null: false
      t.integer :rating, null: false
      t.text :details
      t.timestamps
    end
    add_index :reviews, :task_id
  end
end
