class CreateArtistTaskTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_task_types do |t|
      t.integer :artist_id, null: false
      t.integer :task_type_id, null: false

      t.timestamps
    end

    add_index :artist_task_types, :artist_id
    add_index :artist_task_types, :task_type_id
  end
end
