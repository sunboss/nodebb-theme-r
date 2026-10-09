'use strict';

/* nodebb-theme-iptv — 客户端入口
 * 纯视觉主题：无需客户端逻辑。
 * 保留文件以便将来扩展（如换肤开关），并确保 scripts 引用有效。
 */
(function () {
	if (typeof window === 'undefined') {
		return;
	}
	// 给 body 打标记，方便 CSS 区分主题（不影响功能）
	$(window).on('action:ajaxify.end', function () {
		$('body').addClass('theme-iptv');
	});
	$('body').addClass('theme-iptv');
}());
