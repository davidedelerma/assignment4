class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :surname
      t.string :school
      t.string :city
      #t.string :email,              null: false, default: ""
      t.string :phone_nb

      t.timestamps null: false
    end
  end
end
