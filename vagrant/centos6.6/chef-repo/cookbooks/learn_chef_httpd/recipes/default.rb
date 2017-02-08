#
# Cookbook:: learn_chef_httpd
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

directory '/var/www/html' do
	owner 'vagrant'
	group 'vagrant'
	mode '0755'
	action :create
end

# template '/var/www/html/index.html' do
#   source 'index.html.erb'
# 	owner 'vagrant'
# 	group 'vagrant'
# 	mode '0755'
# end


service "iptables" do
  action [:stop, :disable]
end

package 'httpd'

service 'httpd' do
  action [:enable, :start]
end

template "/etc/httpd/conf.d/rewrite.conf" do
  source "rewrite.conf.erb"
  notifies :restart, "service[httpd]"
end

template "/etc/httpd/conf.d/vagrant_nocache.conf" do
  source "vagrant_nocache.conf.erb"
  notifies :restart, "service[httpd]"
end
