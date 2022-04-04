class PlacesController < ApplicationController

    def index
        render json: Place.all.sort_by {|place| place.location}
    end

end
