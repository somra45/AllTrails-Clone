Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, only: [:create, :update, :destroy, :show, :index]
  resources :sessions, only: [:create, :destroy]
  resources :trails, only: [:create, :update, :index, :show, :destroy]
end
