Package.describe({
	summary: "chirag04/mail-listener2 packaged for Meteor."
});

Npm.depends({ 'mail-listener2': '0.1.1' });

Package.on_use(function (api) {
	api.add_files('mail_listener2.js', 'server');
});