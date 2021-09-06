type Option = {
  label: string,
  value: string|number
}

/**
 * 将数组转换成 下拉框 options
 * @param arr 待转换的数据
 * @param labelKey label 取值字段 默认为 name
 * @param valueKey value 取值字段 默认为 id
 */
export function mapToOptions<T extends Record<string, any>>(
  arr: T[],
  labelKey?: string,
  valueKey?: string,
): Option[]|null {

  let lKey = labelKey || "name";
  let vKey = valueKey || "id";

  if (!Array.isArray(arr)) return null;

  return arr.map((item) => {
    return {
      label: item[lKey]?.toString(),
      value: item[vKey],
    };
  });
}


/**
 * 根据 label 或者 value 查找 option
 * @param options
 * @param query
 */
export function queryOption(
  options: Option[],
  query: {
    label?: string,
    value?: string|number|null
  }): Option|undefined {

  const { label, value } = query;
  if (!label && !value) throw new Error("invalid argument");

  return options.find((option) => {
    if (query.label) return option.label === label;
    return option.value === value;
  });
}
