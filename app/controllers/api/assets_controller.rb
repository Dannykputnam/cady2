class Api::AssetsController < ApplicationController
  before_action :set_area
  before_action :set_asset, only: [:show, :update, :destroy]

  def index
    render json: @area.assets
  end

  def show
    render json: @asset
  end

  def create
    @asset = @area.assets.new(asset_params)
    if @asset.save
      render json: @asset
    else
      render json: {errors: @asset.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @asset.update(asset_params)
      render json:@asset
    else
      render json: {errors: @asset.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @asset.destroy
    render json: {message: "Asset Deleted"}
  end

  private
    def asset_params
      params.require(:asset).permit(:name, :description, :barcode, :price, :pdate, :status, :img)
    end

    def set_area
      @area = Area.find(params[:area_id])
    end

    def set_asset
      @asset = @area.assets.find(params[:id])
    end
end
