const getNestedValue = (obj: Record<string, any>, path: string): unknown => {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc !== null && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, any>)[key];
    }

    return undefined;
  }, obj);
};

const allowedTypes = ['string', 'number'];

export default {
  array2Object: <T extends Record<string, any>>(
    arr: T[],
    key: string = 'id'
  ): Record<string, T> => arr
    .reduce((result, item) => {
      const keyValue = getNestedValue(item, key);
    
      if (keyValue !== undefined && allowedTypes.includes(typeof keyValue)) {
        result[String(keyValue)] = item;
      }
    
      return result;
    }, {} as Record<string, T>),

  groupByObjKey: <T, K extends keyof T>(
    arr: T[],
    key?: K
  ): Record<string, T[]> => {
    const groupKey = key ?? ('id' as K);
    
    return arr.reduce((acc, item) => {
      const value = String(item[groupKey]);
      
      if (!acc[value]) {
        acc[value] = [];
      }
      
      acc[value].push(item);
      
      return acc;
    }, {} as Record<string, T[]>);
  }
};