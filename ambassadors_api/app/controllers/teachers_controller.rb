class TeachersController < ApplicationController
  before_action :authenticate_teacher!

  def index
    render json: current_teacher
  end

end