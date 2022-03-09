#Rails.application.routes.draw do
 # devise_for :users,
 #           controllers: {
 #                sessions: 'users/sessions',
  #               registrations: 'users/registrations'
   #          }
  #get '/member-data', to: 'members#show'
  
#end
Rails.application.routes.draw do
 
  resources :houses
  default_url_options :host => "localhost:3000"
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }

  get '/followuptemplate-last', to: 'followuptemplates#last'
  get '/message-last', to: 'messages#last'

  mount ActionCable.server => "/chat"
end