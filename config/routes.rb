Rails.application.routes.draw do
  get 'calculations/index'
  root "calculations#index"
end
