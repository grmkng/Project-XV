/**
 * @param {string[]} items
 * @param {string} item
 */
export function addItem(items, item) {
    items.push(item)
    return items
}

/**
 * @param {string[]} items
 */
export function exportLowerCasedCSV(items) {
    let result = items.map(function (item){
        return item.toLowerCase()
    }).join(", ")
return result
}