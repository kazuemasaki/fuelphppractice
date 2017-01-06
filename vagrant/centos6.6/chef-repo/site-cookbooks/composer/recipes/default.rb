#
# Cookbook:: composer
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.


template '/var/www/composer.json' do
  source 'composer.json.erb'
  mode 0755
end

template '/var/www/composer.phar' do
  source 'composer.phar.erb'
  mode 0755
end

bash 'install packages by composer' do
	cwd '/var/www/'
	code <<-EOC
		./composer.phar install
	EOC
end 