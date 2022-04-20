class PlacesController < ApplicationController

    def index
        # render json: Place.all.sort_by {|place| place.location}
        # better to use the following - use SQL instead of ruby!
        render json: Place.order(location)
    end

    def sorted
        places = Place.order(name: :desc)
        render json: places
    end

end
