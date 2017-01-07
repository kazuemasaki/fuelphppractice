#
# Cookbook:: php
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.
%w[
  php
  php-mbstring
].each do |pkg|
  package "#{pkg}" do
    action :install
  end
end