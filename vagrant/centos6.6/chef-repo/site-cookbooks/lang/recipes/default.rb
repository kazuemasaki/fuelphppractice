#
# Cookbook:: lang
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.
template '/etc/sysconfig/i18n' do
  source 'i18n.erb'
	owner 'root'
	group 'root'
	mode '0644'
end