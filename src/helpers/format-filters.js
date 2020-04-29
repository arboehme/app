/**
 * Flatten a filters array to a single object that can be used by the SDK
 * @param  {Array} filters  The filters to transform
 * @return {Object}         The filters query param
 *
 * @example
 *
 * const filters = [
 *   {
 *     field: 'title',
 *     operator: 'contains',
 *     value: 'Directus'
 *   }
 * ];
 *
 * formatFilters(filters);
 * // => {
 *   'filter[title][contains]': 'Directus'
 * }
 */
export default function formatFilters(filters) {
	const parsedFilters = {};

	filters.forEach(filter => {
		parsedFilters[`filter[${filter.field}][${filter.operator}]`] = filter.value;
	});

	return parsedFilters;
}

/**
 * Parse array of filters in syntax used by SDK in the array of filters objects
 * @param  {Array} filters  The filters to parse
 * @return {Object}         The filters as object array
 *
 * @example
 *
 * 'filter[title][contains]=Directus'
 *
 * parseFilters(filters);
 * // => [
 *       {
 *         field: 'title',
 *         operator: 'contains',
 *         value: 'Directus'
 *       }
 *     ];
 *   }
 */
export function parseFilters(filters) {
	const parsedFilters = [],
		filterRegExp = /filter\[(.*)\]\[(.*)\]=(.*)/;

	filters.forEach(filter => {
		let match = filterRegExp.exec(filter);
		if (match.length == 4) {
			parsedFilters.push({
				field: match[1],
				operator: match[2],
				value: match[3]
			});
		}
	});

	return parsedFilters;
}
