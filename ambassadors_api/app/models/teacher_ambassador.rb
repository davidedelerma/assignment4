class TeacherAmbassador < ActiveRecord::Base
  belongs_to :teacher
  belongs_to :ambassador
end
