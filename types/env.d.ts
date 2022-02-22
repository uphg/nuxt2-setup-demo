
declare function defineProps<T>(param: T): { [K in keyof T]: any}
declare function defineEmits<T>(param: T): (key: string, fn?: Function) => void
