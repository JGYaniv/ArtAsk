class AddTaskAddress < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :address, :string
    remove_column :tasks, :end_date
  end
end
