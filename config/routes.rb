Rails.application.routes.draw do
  resources :pages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get '/about', to: 'pages#about', as: :about_path
  get '/gallery', to: 'pages#gallery', as: :gallery_path
  get '/contact', to: 'pages#contact', as: :contact_path

end
