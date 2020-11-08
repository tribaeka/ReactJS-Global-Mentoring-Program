export enum SortOptions {
    RELEASE_DATE = 'release_date',
    RUNTIME = 'runtime'
}

export const getDisplayValue = (value: SortOptions | string): string =>
    value.replace('_', ' ').toUpperCase();