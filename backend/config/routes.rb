Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :comments

  post '/authenticate', to: 'auth#create'
  get '/profile', to: 'auth#profile'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
