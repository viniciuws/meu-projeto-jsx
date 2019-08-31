export const validateTaskSearch = value => (
  value && value.length <= 20
    ? undefined
    : 'O termo de busca deve ter até 20 caracteres'
)

export const validatePostDescription = (value, formValues, meta) => (
  value && value.length <= 20
    ? undefined
    : 'O termo de busca deve ter até 20 caracteres'
)