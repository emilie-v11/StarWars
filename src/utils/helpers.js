/**
 * Transforms an object into a list of fields.
 * @param {object} obj
 * @param {object} [opts]
 * @param {string[]} [opts.exclude]    - keys to ignore
 * @param {string[]|null} [opts.only]  - if defined, keep only these keys
 * @param {(key:string)=>string} [opts.labelize] - transforms the key into a label
 * @param {(value:any, key:string, obj:object)=>any} [opts.valueize] - transforms the value
 * @param {Record<string,string>} [opts.keyMap] - replace the label of certain keys
 */
export function objectToFields(
  obj,
  {
    exclude = [],
    only = null,
    labelize = humanizeKey,
    valueize = defaultValueize,
    keyMap = {},
  } = {}
) {
  if (!obj || typeof obj !== 'object') return [];

  const onlySet = Array.isArray(only) && only.length ? new Set(only) : null;
  const excludeSet = new Set(exclude);
  
  return Object.entries(obj)
    .filter(([k]) => (only ? onlySet.has(k) : !excludeSet.has(k)))
    .map(([key, value]) => ({
      label: keyMap[key] ?? labelize(key),
      value: valueize(value, key, obj),
    }));
}

// --- helpers by default ---
function humanizeKey(key) {
  return key
    .replace(/_/g, ' ') // snake_case -> espaces
    .replace(/([A-Z])/g, ' $1') // camelCase -> espaces
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function defaultValueize(v) {
  if (v == null) return 'Unknown';
  if (Array.isArray(v)) return v.length ? v.join(', ') : 'Unknown';
  return String(v);
}

export function filterProps(
  obj,
  {
    only = null,
    exclude = [],
    valueMap = {}, // { key: (value, obj) => newValue }
    valueize = null, // (value, key, obj) => newValue (fallback global)
  } = {}
) {
  if (!obj || typeof obj !== 'object') return obj;

  const entries = Object.entries(obj)
    .filter(([k]) => (only ? only.includes(k) : !exclude.includes(k)))
    .map(([k, v]) => {
      let out = v;
      if (valueMap[k]) out = valueMap[k](out, obj); // priorité aux clés
      else if (valueize) out = valueize(out, k, obj); // sinon fallback global
      return [k, out];
    });

  return Object.fromEntries(entries);
}

/** Array version: applies filterProps to each object in the list */
export function filterList(arr, opts) {
  if (!Array.isArray(arr)) return filterProps(arr, opts);
  return arr.map((o) => filterProps(o, opts));
}
