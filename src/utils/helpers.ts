/**
 * Extract id from an url
 * @param {string} url
 * @return {*}  {(number | null)}
 */
export const idFromUrl = (url: string): number | null => {
  const idMatch = url.match(/people\/(\d+)/);
  return idMatch ? Number(idMatch[1]) : null;
};

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

export type AnyRecord = Record<string, unknown>;

export interface Field {
  label: string;
  value: unknown;
}

export type Labelize = (key: string) => string;
export type Valueize<T extends AnyRecord> = (
  value: T[keyof T],
  key: keyof T,
  obj: T
) => unknown;

export interface ObjectToFieldsOptions<T extends AnyRecord> {
  exclude?: (keyof T)[];
  only?: (keyof T)[] | null;
  labelize?: Labelize;
  valueize?: Valueize<T>;
  keyMap?: Partial<Record<keyof T, string>>;
}

export interface FilterPropsOptions<T extends AnyRecord> {
  only?: (keyof T)[] | null;
  exclude?: (keyof T)[];
  valueMap?: Partial<{ [K in keyof T]: (value: T[K], obj: T) => unknown }>;
  valueize?: (value: T[keyof T], key: keyof T, obj: T) => unknown;
}

// --- helpers by default ---
function humanizeKey(key: string): string {
  return key
    .replace(/_/g, ' ') // snake_case -> espaces
    .replace(/([A-Z])/g, ' $1') // camelCase -> espaces
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function defaultValueize(v: unknown): string {
  if (v == null) return 'Unknown';
  if (Array.isArray(v)) return v.length ? v.join(', ') : 'Unknown';
  return String(v);
}

export function objectToFields<T extends AnyRecord>(
  obj: T | null | undefined,
  {
    exclude = [],
    only = null,
    labelize = humanizeKey,
    valueize = defaultValueize as Valueize<T>,
    keyMap = {},
  }: ObjectToFieldsOptions<T> = {}
): Field[] {
  if (!obj || typeof obj !== 'object') return [];

  const onlySet =
    Array.isArray(only) && only.length ? new Set<keyof T>(only) : null;
  const excludeSet = new Set<keyof T>(exclude);

  return (Object.entries(obj) as [keyof T, T[keyof T]][])
    .filter(([k]) => (onlySet ? onlySet.has(k) : !excludeSet.has(k)))
    .map(([key, value]) => {
      const label: string = keyMap[key] ?? labelize(String(key));
      const val = valueize(value, key, obj);
      return { label, value: val };
    });
}

export function filterProps<T extends AnyRecord>(
  obj: T | null | undefined,
  {
    only = null,
    exclude = [],
    valueMap = {},
    valueize,
  }: FilterPropsOptions<T> = {}
): Partial<Record<keyof T, unknown>> {
  if (!obj || typeof obj !== 'object') return {};

  const onlySet =
    Array.isArray(only) && only.length ? new Set<keyof T>(only) : null;
  const excludeSet = new Set<keyof T>(exclude);

  const entries: [keyof T, unknown][] = (
    Object.entries(obj) as [keyof T, T[keyof T]][]
  )
    .filter(([k]) => (onlySet ? onlySet.has(k) : !excludeSet.has(k)))
    .map(([k, v]) => {
      const perKey = valueMap[k] as
        | ((value: T[typeof k], obj: T) => unknown)
        | undefined;
      let out: unknown = v;
      if (perKey) out = perKey(v as T[typeof k], obj);
      else if (valueize) out = valueize(v, k, obj);
      return [k, out];
    });

  return Object.fromEntries(entries) as Partial<Record<keyof T, unknown>>;
}

/** Array version: applies filterProps to each object in the list */
export function filterList<T extends AnyRecord>(
  arr: T[] | T,
  opts: FilterPropsOptions<T>
): Array<Partial<Record<keyof T, unknown>>> | Partial<Record<keyof T, unknown>> {
  return Array.isArray(arr)
    ? arr.map((o) => filterProps(o, opts))
    : filterProps(arr, opts);
}

export const isEmpty = (obj: AnyRecord | null | undefined): boolean => {
  if (!obj || typeof obj !== 'object') return true;
  return Object.keys(obj).length === 0;
};
