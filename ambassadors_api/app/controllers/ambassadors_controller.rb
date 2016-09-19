class AmbassadorsController < ApplicationController

  before_action :authenticate_teacher!

  def index
    ambassadors = Ambassador.all  
    render :json => ambassadors.to_json()
  end

  def show
    ambassador = Ambassador.find(params[:id])
    render json:ambassador
  end

  def create
    ambassador = Ambassador.create( ambassador_params )
    render json: ambassador, status: :created
  end


  private
  def ambassador_params
    params.require(:ambassadors).permit([:name, :surname, :subject, :city, :email, :phone_nb])
  end

end
