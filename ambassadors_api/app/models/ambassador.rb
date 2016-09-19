class Ambassador < ActiveRecord::Base
  has_many :teacher_ambassadors
  has_many :teachers, through: :teacher_ambassadors
end
