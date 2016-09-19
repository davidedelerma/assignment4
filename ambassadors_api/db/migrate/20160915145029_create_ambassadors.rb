class CreateAmbassadors < ActiveRecord::Migration
  def change
    create_table :ambassadors do |t|
      t.string :name
      t.string :surname
      t.string :subject
      t.string :city
      t.string :email
      t.string :phone_nb

      t.timestamps null: false
    end
  end
end
