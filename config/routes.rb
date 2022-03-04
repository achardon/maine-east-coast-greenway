Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  #log in and log out routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
