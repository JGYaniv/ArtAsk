Rails.application.routes.draw do

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :index, :show, :update, :destroy] do
      resources :tasks, only: [:index]
      resources :reviews, only: [:index]
      member do
        get 'verification'
      end
    end
    resources :tasks, only: [:show, :create, :update, :destroy]
    resources :task_types, only: [:show, :index] do
      member do
        get 'artists'
        get 'reviews'
      end
    end
    resource :session, only: [:create, :destroy]
  end
end
