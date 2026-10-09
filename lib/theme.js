'use strict';

/**
 * nodebb-theme-iptv — 服务端入口（CJS）
 * 子主题：继承 harmony 的全部行为，只做最少的配置透传，
 * 保证 harmony 模板里用到的 `config.theme.*` 开关正常工作。
 */

const theme = {};

const meta = require.main.require('./src/meta');
const user = require.main.require('./src/user');
const _ = require.main.require('lodash');

// 与 harmony 保持一致的默认开关
const defaults = {
	enableQuickReply: 'on',
	enableBreadcrumbs: 'on',
	centerHeaderElements: 'off',
	mobileTopicTeasers: 'off',
	stickyToolbar: 'on',
	autohideBottombar: 'on',
	openSidebars: 'off',
	chatModals: 'off',
};

theme.init = async function () {
	// 纯视觉主题：无路由、无后台页
};

theme.addAdminNavigation = async function (header) {
	header.plugins.push({
		route: '/plugins/theme-iptv',
		icon: 'fa-paint-brush',
		name: 'IPTV Ribbon Theme',
	});
	return header;
};

theme.defineWidgetAreas = async function (areas) {
	const locations = ['header', 'sidebar', 'footer'];
	const templates = [
		'categories.tpl', 'category.tpl', 'topic.tpl', 'users.tpl',
		'unread.tpl', 'recent.tpl', 'popular.tpl', 'top.tpl', 'tags.tpl', 'tag.tpl',
		'login.tpl', 'register.tpl',
	];
	function capitalizeFirst(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	templates.forEach((template) => {
		locations.forEach((location) => {
			areas.push({
				name: `${capitalizeFirst(template.split('.')[0])} ${capitalizeFirst(location)}`,
				template: template,
				location: location,
			});
		});
	});
	return areas;
};

async function loadThemeConfig(uid) {
	const [themeConfig, userConfig] = await Promise.all([
		meta.settings.get('harmony'),
		user.getSettings(uid),
	]);
	const config = { ...defaults, ...themeConfig, ...(_.pick(userConfig, Object.keys(defaults))) };
	Object.keys(defaults).forEach((key) => {
		config[key] = config[key] === 'on';
	});
	return config;
}

theme.getThemeConfig = async function (config) {
	config.theme = await loadThemeConfig(config.uid);
	return config;
};

module.exports = theme;
