Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json} do
    resources :members, only: [:create, :update, :destroy, :show] do 
      resources :favorites, only: [:create, :destroy, :index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :trails, only: [:index, :show]
  end
end
