Rails.application.routes.draw do
  resources :attractions
  resources :accommodations
  resources :places
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  #log in and log out routes
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
