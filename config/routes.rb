Rails.application.routes.draw do
  
  resources :days, only: [:update]

  resources :trips do
    resources :days, only: [:update]
  end

  # resources :attractions
  resources :accommodations, only: [:index]
  resources :places, only: [:index]

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  #log in and log out routes
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #route to fallback when path doesn't match any of the above
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
