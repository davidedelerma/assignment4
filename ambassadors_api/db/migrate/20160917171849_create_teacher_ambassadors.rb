class CreateTeacherAmbassadors < ActiveRecord::Migration
  def change
    create_table :teacher_ambassadors do |t|
      t.references :teacher, index: true, foreign_key: true
      t.references :ambassador, index: true, foreign_key: true
      t.date :data

      t.timestamps null: false
    end
  end
end
