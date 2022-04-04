class ApplicationController < ActionController::API
    include ActionController::Cookies

    #add helper method to find user current_user 
    # like this: @user ||= user.find(session[user_id])
    #so that the database doesn't query for the user each time

    def hello_world
        session[:count] ||= 0
        session[:count] = session[:count] + 1
        render json: { count: session[:count] }
      end

      #you can define all your error handling here
end
