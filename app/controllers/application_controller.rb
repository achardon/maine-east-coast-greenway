class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    #make sure session is working with this method (can be seen on home page of rails backend)
    def hello_world
        session[:count] ||= 0
        session[:count] = session[:count] + 1
        render json: { count: session[:count] }
    end

    private
    #add helper method to find user current_user 
    def set_user
      #use ||= so that the database doesn't query for the user each time
      @user ||= User.find(session[:user_id])
    end

    def record_not_found
        render json: {error: "Not Found"}, status: :not_found
    end

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        return render json: {errors: "You must be logged in to view, create, or edit a trip."}, status: :unauthorized unless session[:user_id]
    end

end
