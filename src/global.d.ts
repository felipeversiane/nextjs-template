type Messages = typeof import('./messages/pt-BR.json')
type EnMessages = typeof import('./messages/en-US.json')

declare interface IntlMessages extends Messages,EnMessages {}