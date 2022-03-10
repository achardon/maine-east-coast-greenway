class AccommodationsController < ApplicationController
        
    def index
        render json: Accommodation.all
    end

end
