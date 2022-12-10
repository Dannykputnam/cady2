require "test_helper"

class Api::AssetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_assets_index_url
    assert_response :success
  end

  test "should get show" do
    get api_assets_show_url
    assert_response :success
  end

  test "should get create" do
    get api_assets_create_url
    assert_response :success
  end

  test "should get update" do
    get api_assets_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_assets_destroy_url
    assert_response :success
  end
end
