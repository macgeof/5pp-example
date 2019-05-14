const processJSON = ((__json) => {
	const __response = {};
	try
	{	
		const __validData = __json.payload;
		const __responseItems = [];
		const __items = __validData;
		if (__items)
		{
			__items.forEach((__item) => {
				let __respondItem = _getResponseForItem(__item);
				if (__respondItem)
				{
					__responseItems.push(__respondItem);
				}
			});
			__response.response = __responseItems;
		}
		else
		{
			__response.error = 'Invalid JSON';
		}
	}
	catch (__err)
	{
		__response.error = 'Invalid JSON';
	}
	return __response;
});

const _getResponseForItem = ((__item) => {
	let __response = null;
	if (__item.count && __item.count > 0 && __item.name && __item.logos)
	{	
		let __thumbnail = null;
		const __logos = __item.logos;
		let __sizes = null;
		let __size = 0;
		__logos.forEach((__logo) => {
			if (__logo.size && __logo.url)
			{
				let __logoSize = 0
				__sizes = __logo.size.split('x');
				if (__sizes && __sizes.length > 0)
				{
					__logoSize = parseFloat(__sizes[0]);
					if (!isNaN(__logoSize) && __logoSize >= 64 && __logoSize <= 128 && __logoSize > __size)
					{
						__size = __sizes[0];
						__thumbnail = __logo.url;
					}
				}
			}
		});
		if (__thumbnail !== null)
		{
			__response = {
				name:__item.name,
				count:__item.count,
				thumbnail:__thumbnail
			};
		}
	}
	return __response;
});

module.exports = processJSON;