class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  # def sign_up_params
  #   devise_parameter_sanitizer.sanitize(:sign_up)
  # end
end