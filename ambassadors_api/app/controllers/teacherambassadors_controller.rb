class TeacherambassadorsController < ApplicationController
  before_action :authenticate_teacher!

  def index
    teacher = current_teacher
    render json: teacher.as_json( include: {teacher_ambassadors:{
      include: :ambassador
      }

    })
  end

  def create
    teacherAmbassador = TeacherAmbassador.create( teacherAmbassador_params )
    render json: teacherAmbassador, status: :created
  end


  private
  def teacherAmbassador_params
    params.require(:teacher_ambassadors).permit([:teacher_id, :ambassador_id])
  end

end