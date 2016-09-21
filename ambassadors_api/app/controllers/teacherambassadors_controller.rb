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
    if TeacherAmbassador.exists?(teacher_id: params[:teacher_ambassadors][:teacher_id], ambassador_id: params[:teacher_ambassadors][:ambassador_id]) == false
      teacherAmbassador = TeacherAmbassador.create( teacherAmbassador_params )
      # render json: teacherAmbassador, status: :created
      render :nothing => true
    end
  end

  def destroy
    # join = TeacherAmbassador.find(params[:id])
    # join.destroy
    TeacherAmbassador.destroy(params[:id])
    render :nothing => true
  end

  private
  def teacherAmbassador_params
    params.require(:teacher_ambassadors).permit([:teacher_id, :ambassador_id])
  end

end