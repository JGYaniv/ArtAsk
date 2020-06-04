require 'test_helper'

class Api::TaskTypesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_task_types_index_url
    assert_response :success
  end

  test "should get show" do
    get api_task_types_show_url
    assert_response :success
  end

end
