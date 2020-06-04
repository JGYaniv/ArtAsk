class CreateTaskTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :task_types do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.timestamps
    end
  end
end
