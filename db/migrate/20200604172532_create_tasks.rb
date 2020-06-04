class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :details
      t.boolean :completed
      t.integer :artist_id, null: false
      t.integer :task_type_id, null: false
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps
    end
    add_index :tasks, :artist_id
    add_index :tasks, :task_type_id
  end
end
